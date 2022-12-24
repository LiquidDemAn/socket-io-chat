import { ErrorType } from '../../../typedef';

export type UserStateType = {
	user?: UserType | null;
	error?: ErrorType | null;
	contacts?: UserType[] | null;
};

export type UserType = {
	_id: string;
	username: string;
	email: string;
	avatar: string;
};

export type LoginType = {
	username: string;
	password: string;
};

export type RegisterType = {
	username: string;
	email: string;
	password: string;
};

export type CreatMessageType = {
	text: string;
	from: string;
	to: string;
};

export type MessageType = {
	fromSelf: boolean;
	message: string;
};
