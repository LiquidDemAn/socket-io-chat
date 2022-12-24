import { useEffect, useState } from 'react';
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
import { Container, LeftSide } from './chat.styled';

export const Chat = () => {
	const dispatch = useAppDispatch();
	const id = useAppSelector(getUserId);
	const user = useAppSelector(getUser);
	const contacts = useAppSelector(getContacts);

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
