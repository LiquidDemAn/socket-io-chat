export const getUser = () => {
	const user = localStorage.getItem('caht-app-user');

	if (!user) {
		return null;
	}
	return JSON.parse(user);
};
