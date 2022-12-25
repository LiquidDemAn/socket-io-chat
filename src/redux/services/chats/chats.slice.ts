import { createSlice } from '@reduxjs/toolkit';
import { createMessageAction, loadChatAction } from './actions';
import { ChatsStateType } from './typedef';

const initialState: ChatsStateType = {};

export const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		loadArivalMessage(state, { payload }) {
			if (state.arrivalChats && state.arrivalChats[payload.from]) {
				state.arrivalChats[payload.from].push(payload);
			} else if (state.arrivalChats && !state.arrivalChats[payload.from]) {
				state.arrivalChats = { [payload.from]: [payload] };
			}

			if (!state.arrivalChats) {
				state.arrivalChats = { [payload.from]: [payload] };
			}

			if (state.chats && state.chats[payload.from]) {
				state.chats[payload.from].push(payload);
			}
		},

		clearArrivalChat(state, { payload }) {
			if (state.arrivalChats && state.arrivalChats[payload]) {
				delete state.arrivalChats[payload];
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

export const { loadArivalMessage, clearArrivalChat } = chatsSlice.actions;
