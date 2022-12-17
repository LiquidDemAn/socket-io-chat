import { createSlice } from '@reduxjs/toolkit';
import { ErrorType } from '../../../typedef';
import { loginAction } from './actions';
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
			.addCase(loginAction.fulfilled, (state, { payload }) => {
				state.user = payload;
			})
			.addCase(loginAction.rejected, (state, { payload }) => {
				state.error = payload as ErrorType;
			}),
});
