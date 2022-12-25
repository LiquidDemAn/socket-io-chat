import { AppState } from '../../store/typedef';

export const getChat = (state: AppState, id: string) => {
	const chats = state.chats.chats;

	if (chats) {
		return chats[id];
	} else {
		return null;
	}
};

export const getChatsIds = (state: AppState) => {
	const chats = state.chats.chats;

	if (chats) {
		return Object.keys(chats);
	} else {
		return [];
	}
};

export const getArrivalChats = (state: AppState) => state.chats.arrivalChats;

export const getArrivalChat = (state: AppState, id: string) => {
	const chats = state.chats.arrivalChats;

	return chats && chats[id];
};
