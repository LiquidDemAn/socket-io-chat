import axios, { AxiosError } from 'axios';
import { LoginType, RegisterType, UserType } from './typedef';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	loginRoute,
	registerRoute,
	setAvatarRoute,
} from '../../../utils/APIRoutes';

export const loginAction = createAsyncThunk<UserType, LoginType>(
	'user/login',
	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(loginRoute, params);

			localStorage.setItem('chat-app-user', JSON.stringify(data.user._id));
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

			localStorage.setItem('chat-app-user', JSON.stringify(data.user._id));

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
		await axios.post(`${setAvatarRoute}/${id}`, avatar);

		return avatar;
	} catch (err) {
		const error = err as AxiosError;
		console.error(error);
		return rejectWithValue(error.response?.data);
	}
});
