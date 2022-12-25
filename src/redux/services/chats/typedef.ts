export type ChatsStateType = {
	chats?: ChatsType;
};

export type ChatsType = {
	[key: string]: MessageType[];
};

export type MessageType = {
	_id: string;
	from: string;
	fromSelf: boolean;
	message: string;
};
