export type ChatsStateType = {
	chats?: ChatsType;
	arrivalChats?: ChatsType;
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
