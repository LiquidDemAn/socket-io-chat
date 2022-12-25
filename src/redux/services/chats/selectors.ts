import { AppState } from '../../store/typedef';

export const getChat = (state: AppState, id: string) => {
	const chats = state.chats.chats;

	if (chats) {
		return chats[id];
	} else {
		return null;
	}
};
