import axios, { AxiosError } from 'axios';
import { LoginType, RegisterType, UserType } from './typedef';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	loginRoute,
	registerRoute,
	setAvatarRoute,
	loadUserRoute,
	contactsRoute,
} from '../../../utils/api-routes';
import { getUserId, setUserId } from '../../../utils/local-storage';
import { ErrorType } from '../../../typedef';

export const loadUserAction = createAsyncThunk<UserType>(
	'user/load-user',
	async () => {
		const userId = getUserId();
		const { data } = await axios.get(`${loadUserRoute}/${userId}`);
		return data;
	}
);

export const loginAction = createAsyncThunk<
	UserType,
	LoginType,
	{ rejectValue: ErrorType | undefined }
>('user/login', async (params, { rejectWithValue }) => {
	try {
		const { data } = await axios.post<UserType>(loginRoute, params);
		setUserId(data._id);
		return data;
	} catch (err) {
		const error = err as AxiosError<ErrorType>;
		return rejectWithValue(error.response?.data);
	}
});

export const registerAction = createAsyncThunk<
	UserType,
	RegisterType,
	{ rejectValue: ErrorType | undefined }
>('user/register', async (params, { rejectWithValue }) => {
	try {
		const { data } = await axios.post<UserType>(registerRoute, params);
		setUserId(data._id);
		return data;
	} catch (err) {
		const error = err as AxiosError<ErrorType>;
		return rejectWithValue(error.response?.data);
	}
});

export const setAvatarAction = createAsyncThunk<
	string,
	{ avatar: string; id: string },
	{ rejectValue: ErrorType | undefined }
>('user/set-avatar', async ({ avatar, id }, { rejectWithValue }) => {
	try {
		await axios.post(`${setAvatarRoute}/${id}`, { avatar });
		return avatar;
	} catch (err) {
		const error = err as AxiosError<ErrorType>;
		return rejectWithValue(error.response?.data);
	}
});

export const loadContactsAction = createAsyncThunk<
	UserType[],
	string,
	{ rejectValue: ErrorType | undefined }
>('user/load-contacts', async (id, { rejectWithValue }) => {
	try {
		const { data } = await axios.get(`${contactsRoute}/${id}`);
		return data;
	} catch (err) {
		const error = err as AxiosError<ErrorType>;
		return rejectWithValue(error.response?.data);
	}
});
