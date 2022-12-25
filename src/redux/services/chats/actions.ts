import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getMessagesRoute } from '../../../utils/api-routes';
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
