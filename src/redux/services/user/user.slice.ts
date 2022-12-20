import { createSlice } from '@reduxjs/toolkit';
import { ErrorType } from '../../../typedef';
import {
	loadUserAction,
	loginAction,
	registerAction,
	setAvatarAction,
} from './actions';
import { UserStateType } from './typedef';

const initialState: UserStateType = {
	user: null,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(loadUserAction.fulfilled, (state, { payload }) => {
				state.user = payload;
			})
			.addCase(loginAction.pending, (state) => {
				state.error = null;
			})
			.addCase(loginAction.fulfilled, (state, { payload }) => {
				state.user = payload;
			})
			.addCase(loginAction.rejected, (state, { payload }) => {
				state.error = payload as ErrorType;
			})
			.addCase(registerAction.pending, (state) => {
				state.error = null;
			})
			.addCase(registerAction.fulfilled, (state, { payload }) => {
				state.user = payload;
			})
			.addCase(registerAction.rejected, (state, { payload }) => {
				state.error = payload as ErrorType;
			})
			.addCase(setAvatarAction.pending, (state) => {
				state.error = null;
			})
			.addCase(setAvatarAction.fulfilled, (state, { payload }) => {
				if (state.user) {
					state.user.avatar = payload;
				}
			})
			.addCase(setAvatarAction.rejected, (state, { payload }) => {
				state.error = payload as ErrorType;
			}),
});
