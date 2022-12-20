import { UserType } from '../redux/services/user/typedef';

export const setUserId = (id: string) => {
	localStorage.setItem('chat-app-user', id);
};

export const getUser = () => {
	const user = localStorage.getItem('caht-app-user');

	if (!user) {
		return null;
	}
	return JSON.parse(user) as UserType;
};

export const getUserId = () => {
	return localStorage.getItem('chat-app-user')?.toString();
};
