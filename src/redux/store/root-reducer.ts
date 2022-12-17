import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../services/user/user.slice';

export const rootReducer = combineReducers({
	user: userSlice.reducer,
});
