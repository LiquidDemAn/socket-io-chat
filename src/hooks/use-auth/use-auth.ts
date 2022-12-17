import { getUser } from './../../redux/services/user/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/hooks';

export const useAuth = () => {
	const navigate = useNavigate();
	const user = useAppSelector(getUser);
	const isAuth = Boolean(user);

	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}

		if (user && !user.avatar) {
			navigate('/set-avatar');
		}
	}, [navigate, isAuth, user]);
};
