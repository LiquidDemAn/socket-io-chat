import { getIsAuth } from './../../redux/services/user/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/hooks';

export const useAuth = () => {
	const navigate = useNavigate();
	const isAuth = useAppSelector(getIsAuth);

	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}
	}, [navigate, isAuth]);
};
