import {
	createMessageRoute,
	getMessagesRoute,
} from '../../../utils/api-routes';
import axios, { AxiosError } from 'axios';
import {
	LoginType,
	CreatMessageType,
	RegisterType,
	UserType,
	MessageType,
} from './typedef';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	loginRoute,
	registerRoute,
	setAvatarRoute,
	loadUserRoute,
	contactsRoute,
} from '../../../utils/api-routes';
import { getUserId, setUserId } from '../../../utils/local-storage';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Socket } from 'socket.io-client';

export const loadUserAction = createAsyncThunk<UserType>(
	'user/load-user',
	async () => {
		const userId = getUserId();
		const { data } = await axios.get(`${loadUserRoute}/${userId}`);
		return data.user;
	}
);

export const loginAction = createAsyncThunk<UserType, LoginType>(
	'user/login',
	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(loginRoute, params);

			setUserId(data.user._id);
			return data.user;
		} catch (err) {
			const error = err as AxiosError;
			console.error(error);
			return rejectWithValue(error.response?.data);
		}
	}
);

export const registerAction = createAsyncThunk<UserType, RegisterType>(
	'user/register',
	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(registerRoute, params);

			setUserId(data.user._id);

			return data.user;
		} catch (err) {
			const error = err as AxiosError;
			console.error(error);
			return rejectWithValue(error.response?.data);
		}
	}
);

export const setAvatarAction = createAsyncThunk<
	string,
	{ avatar: string; id: string }
>('user/set-avatar', async ({ avatar, id }, { rejectWithValue }) => {
	try {
		await axios.post(`${setAvatarRoute}/${id}`, { avatar });
		return avatar;
	} catch (err) {
		const error = err as AxiosError;
		console.error(error);
		return rejectWithValue(error.response?.data);
	}
});

export const loadContactsAction = createAsyncThunk<UserType[], string>(
	'user/load-contacts',
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`${contactsRoute}/${id}`);
			return data;
		} catch (err) {
			const error = err as AxiosError;
			console.error(error);
			return rejectWithValue(error.response?.data);
		}
	}
);

export const createMessageAction = createAsyncThunk<
	MessageType,
	{
		message: CreatMessageType;
		setMessages: Dispatch<SetStateAction<MessageType[]>>;
		socketRef: MutableRefObject<Socket | null>;
	}
>('user/create-message', async ({ message, setMessages, socketRef }) => {
	const { data } = await axios.post(createMessageRoute, message);
	setMessages((prev) => [...prev, data]);

	socketRef.current?.emit('send-message', { ...message, _id: data._id, sender: data.sender });

	return data as MessageType;
});

export const getMessagesAction = createAsyncThunk<
	void,
	{
		from: string;
		to: string;
		setMessages: Dispatch<SetStateAction<MessageType[]>>;
	}
>('user/get-messages', async ({ from, to, setMessages }) => {
	const { data } = await axios.get(`${getMessagesRoute}/${from}/${to}`);
	setMessages(data);
});
