import { useEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { loadContactsAction } from '../../redux/services/user/actions';
import { useAppDispatch } from '../../redux/store/hooks';
import { getUserId } from '../../utils/local-storage';
import { Container } from './chat.styled';

export const Chat = () => {
	const dispatch = useAppDispatch();
	const id = getUserId();

	useEffect(() => {
		if (id) {
			dispatch(loadContactsAction(id));
		}
	}, [id, dispatch]);

	return <Container>Chat</Container>;
};
