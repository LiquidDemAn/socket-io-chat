export const setUserId = (id: string) => {
	localStorage.setItem('chat-app-user', id);
};

export const getUserId = () => {
	return localStorage.getItem('chat-app-user')?.toString();
};
