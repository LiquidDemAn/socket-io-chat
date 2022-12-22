import { getUser } from './../../redux/services/user/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/hooks';

export const useAuth = () => {
	const navigate = useNavigate();
	const user = useAppSelector(getUser);
	const pathname = window.location.pathname;

	useEffect(() => {
		if (user && !user.avatar) {
			navigate('/set-avatar');
		}

		if (
			(user && user.avatar && pathname === '/login') ||
			pathname === '/register'
		) {
			navigate('/');
		}

		if (!user && pathname === '/register') {
			navigate('/register');
		}

		if (!user && pathname !== '/register') {
			navigate('/login');
		}
	}, [navigate, user, pathname]);
};
