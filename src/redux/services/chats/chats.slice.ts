import { createSlice } from '@reduxjs/toolkit';
import { createMessageAction, loadChatAction } from './actions';
import { ChatsStateType } from './typedef';

const initialState: ChatsStateType = {};

export const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		loadArivalMessage(state, { payload }) {
			if (state.arrivalChats) {
				if (state.chats) {
					state.chats[payload.from].push(payload);
				}
				state.arrivalChats[payload.from].push(payload);
			} else {
				state.arrivalChats = { [payload.from]: [payload] };
			}
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(loadChatAction.fulfilled, (state, { payload }) => {
				if (state.chats) {
					state.chats[payload.contactId] = payload.messages;
				} else {
					state.chats = { [payload.contactId]: payload.messages };
				}
			})
			.addCase(createMessageAction.fulfilled, (state, { payload }) => {
				if (state.chats) {
					state.chats[payload.contactId].push(payload.message);
				}
			}),
});

export const { loadArivalMessage } = chatsSlice.actions;
