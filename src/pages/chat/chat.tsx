import { useEffect, useState } from 'react';
import { ChatContainer } from '../../components/chat-container';
import { Contacts } from '../../components/contacts';
import { Logo } from '../../components/logo';
import { Welcome } from '../../components/welcome';
import { useAuth } from '../../hooks/use-auth';
import { loadContactsAction } from '../../redux/services/user/actions';
import {
	getContacts,
	getUser,
	getUserId,
} from '../../redux/services/user/selectors';
import { UserType } from '../../redux/services/user/typedef';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Container, LeftSide } from './chat.styled';

export const Chat = () => {
	const dispatch = useAppDispatch();
	const id = useAppSelector(getUserId);
	const user = useAppSelector(getUser);
	const contacts = useAppSelector(getContacts);

	const [selectedContact, setSelectedContact] = useState<UserType | null>(null);

	const changeContact = (contact: UserType) => {
		setSelectedContact(contact);
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
					<ChatContainer contact={selectedContact} userId={user._id} />
				) : (
					<Welcome name={user.username} />
				)}
			</>
		</Container>
	) : (
		<></>
	);
};
