import { useEffect, useState } from 'react';
import { Avatar } from '../../components/common';
import { Contacts } from '../../components/contacts';
import { Logo } from '../../components/logo';
import { useAuth } from '../../hooks/use-auth';
import { loadContactsAction } from '../../redux/services/user/actions';
import {
	getContacts,
	getUser,
	getUserId,
} from '../../redux/services/user/selectors';
import { UserType } from '../../redux/services/user/typedef';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Container, LeftSide, User, UserName } from './chat.styled';

export const Chat = () => {
	const dispatch = useAppDispatch();
	const id = useAppSelector(getUserId);
	const user = useAppSelector(getUser);
	const contacts = useAppSelector(getContacts);

	const [currentChat, setCurrentChat] = useState<UserType | null>(null);
	const [selectedContact, setSelectedContact] = useState<string | null>(null);

	const changeCurrentChat = (id: string, contact: UserType) => {
		setSelectedContact(id);
		setCurrentChat(contact);
	};

	useAuth();

	useEffect(() => {
		if (id) {
			dispatch(loadContactsAction(id));
		}
	}, [id, dispatch]);

	return (
		<Container>
			<LeftSide>
				<Logo />
				<Contacts
					user={user}
					contacts={contacts}
					changeChat={changeCurrentChat}
					selectedContact={selectedContact}
				/>
				{/* <User>
					<Avatar url={user?.avatar} />
					<UserName>{user?.username}</UserName>
				</User> */}
			</LeftSide>
		</Container>
	);
};
