import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { ChatContainer } from '../../components/chat-container';
import { Contacts } from '../../components/contacts';
import { Logo } from '../../components/logo';
import { Welcome } from '../../components/welcome';
import { useAuth } from '../../hooks/use-auth';
import {
	getMessagesAction,
	loadContactsAction,
} from '../../redux/services/user/actions';
import {
	getContacts,
	getUser,
	getUserId,
} from '../../redux/services/user/selectors';
import { MessageType, UserType } from '../../redux/services/user/typedef';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { host } from '../../utils/APIRoutes';
import { Container, LeftSide } from './chat.styled';

export const Chat = () => {
	const dispatch = useAppDispatch();
	const id = useAppSelector(getUserId);
	const user = useAppSelector(getUser);
	const contacts = useAppSelector(getContacts);

	const socketRef = useRef<Socket | null>(null);

	const [selectedContact, setSelectedContact] = useState<UserType | null>(null);
	const [messages, setMessages] = useState<MessageType[]>([]);

	const changeContact = (contact: UserType) => {
		setSelectedContact(contact);

		if (user?._id) {
			dispatch(
				getMessagesAction({
					from: user._id,
					to: contact._id,
					setMessages,
				})
			);
		}
	};

	useAuth();

	useEffect(() => {
		if (id) {
			dispatch(loadContactsAction(id));
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (user) {
			socketRef.current = io(host);
			socketRef.current.emit('add-user', user._id);
		}
	}, [user]);

	return user ? (
		<Container>
			<LeftSide>
				<Logo />
				<Contacts
					contacts={contacts}
					changeContact={changeContact}
					selectedContactId={selectedContact?._id}
				/>
			</LeftSide>
			<>
				{selectedContact ? (
					<ChatContainer
						setMessages={setMessages}
						messages={messages}
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
