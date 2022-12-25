export type ChatsStateType = {
	chats?: ChatsType;
	// arrivalMessages?: ChatsType;
};

export type ChatsType = {
	[key: string]: MessageType[];
};

export type MessageType = {
	_id: string;
	from: string;
	to: string;
	fromSelf: boolean;
	message: string;
};
