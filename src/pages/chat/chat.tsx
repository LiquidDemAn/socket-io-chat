import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { ChatContainer } from '../../components/chat-container';
import { Avatar } from '../../components/common.styled';
import { Contacts } from '../../components/contacts';
import { Logo } from '../../components/logo';
import { Welcome } from '../../components/welcome';
import { useAuth } from '../../hooks/use-auth';
import { loadArivalMessage } from '../../redux/services/chats/chats.slice';
import { loadContactsAction } from '../../redux/services/user/actions';
import { getContacts, getUser } from '../../redux/services/user/selectors';
import { MessageType, UserType } from '../../redux/services/user/typedef';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { host } from '../../utils/api-routes';
import {
	Container,
	ChatSideBar,
	LogoContactsWrapper,
	UserWrapper,
	UserName,
} from './chat.styled';

export const Chat = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);
	const contacts = useAppSelector(getContacts);

	const socketRef = useRef<Socket | null>(null);

	const [selectedContact, setSelectedContact] = useState<UserType | null>(null);

	const changeContact = (contact: UserType) => {
		setSelectedContact(contact);
	};

	useAuth();

	useEffect(() => {
		if (user?._id) {
			dispatch(loadContactsAction(user?._id));
		}
	}, [user?._id, dispatch]);

	useEffect(() => {
		if (user) {
			socketRef.current = io(host);
			socketRef.current.emit('add-user', user._id);
			console.log(socketRef.current);
		}
	}, [user]);

	useEffect(() => {
		if (socketRef.current) {
			socketRef.current.on('message-receive', (message: MessageType) => {
				dispatch(loadArivalMessage(message));
			});
		}
	}, [dispatch]);

	return user ? (
		<Container>
			<ChatSideBar>
				<LogoContactsWrapper>
					<Logo />
					<Contacts
						contacts={contacts}
						changeContact={changeContact}
						selectedContactId={selectedContact?._id}
					/>
				</LogoContactsWrapper>
				<UserWrapper>
					<Avatar url={user.avatar} />
					<UserName>{user.username}</UserName>
				</UserWrapper>
			</ChatSideBar>
			<>
				{selectedContact ? (
					<ChatContainer
						contact={selectedContact}
						userId={user._id}
						socketRef={socketRef}
					/>
				) : (
					<Welcome name={user.username} />
				)}
			</>
		</Container>
	) : (
		<></>
	);
};
