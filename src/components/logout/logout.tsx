import { Button } from './logout.styled';
import { useAppDispatch } from '../../redux/store/hooks';
import { BiPowerOff } from 'react-icons/bi';
import { logOutAction } from '../../redux/services/user/user.slice';

export const Logout = () => {
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logOutAction());
	};

	return (
		<Button onClick={handleLogout}>
			<BiPowerOff></BiPowerOff>
		</Button>
	);
};
