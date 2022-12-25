import axios from 'axios';
import { createMessageRoute } from './../../../utils/api-routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMessagesRoute } from '../../../utils/api-routes';
import { CreatMessageType } from '../user/typedef';
import { MessageType } from './typedef';

export const loadChatAction = createAsyncThunk<
	{ contactId: string; messages: MessageType[] },
	{
		from: string;
		to: string;
	}
>('user/get-messages', async ({ from, to }) => {
	const { data } = await axios.get(`${getMessagesRoute}/${from}/${to}`);

	return {
		contactId: to,
		messages: data,
	};
});

export const createMessageAction = createAsyncThunk<
	{ contactId: string; message: MessageType },
	{
		message: CreatMessageType;
		// socketRef: MutableRefObject<Socket | null>;
	}
>('user/create-message', async ({ message }) => {
	const { data } = await axios.post(createMessageRoute, message);

	// socketRef.current?.emit('send-message', {
	// 	...message,
	// 	_id: data._id,
	// });

	return {
		contactId: data.to,
		message: data,
	};
});
