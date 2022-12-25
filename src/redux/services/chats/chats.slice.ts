import { createSlice } from '@reduxjs/toolkit';
import { loadChatAction } from './actions';
import { ChatsStateType } from './typedef';

const initialState: ChatsStateType = {};

export const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder.addCase(loadChatAction.fulfilled, (state, { payload }) => {
			if (state.chats) {
				state.chats[payload.contactId] = payload.messages;
			} else {
				state.chats = { [payload.contactId]: payload.messages };
			}
		}),
});
