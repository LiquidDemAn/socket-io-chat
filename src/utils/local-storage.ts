import { UserType } from '../typedef';

export const setUser = (user: UserType) => {
	localStorage.setItem('caht-app-user', JSON.stringify(user));
};

export const getUser = () => {
	const user = localStorage.getItem('caht-app-user');

	if (!user) {
		return null;
	}
	return JSON.parse(user) as UserType;
};
