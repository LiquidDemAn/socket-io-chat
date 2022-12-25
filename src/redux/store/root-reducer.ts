import { chatsSlice } from './../services/chats/chats.slice';
import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../services/user/user.slice';

export const rootReducer = combineReducers({
	user: userSlice.reducer,
	chats: chatsSlice.reducer,
});
