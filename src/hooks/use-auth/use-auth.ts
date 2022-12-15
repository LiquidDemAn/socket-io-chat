import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/local-storage';

export const useAuth = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (getUser()) {
			navigate('/');
		}
	}, [navigate]);
};
