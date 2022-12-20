import { getUser } from './../../redux/services/user/selectors';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/hooks';

export const useAuth = () => {
	const navigate = useNavigate();
	const user = useAppSelector(getUser);
	const isAuth = Boolean(user);
	// const pathname = window.location.pathname;

	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}

		// if (!isAuth && pathname === '/register') {
		// 	navigate('/register');
		// }

		if (user && !user.avatar) {
			navigate('/set-avatar');
		}
	}, [navigate, isAuth, user]);
};
