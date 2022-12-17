import axios, { AxiosError } from 'axios';
import { LoginType, UserType } from './typedef';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRoute } from '../../../utils/APIRoutes';

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
