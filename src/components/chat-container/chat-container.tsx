import React from 'react';
import { UserType } from '../../redux/services/user/typedef';
import { Avatar } from '../common';
import { Logout } from '../logout';
import {
	Container,
	Header,
	UserDetails,
	Name,
	Messages,
} from './chat-container.styled';

type Props = {
	contact: UserType;
};

export const ChatContainer = ({ contact }: Props) => {
	return (
		<Container>
			<Header>
				<UserDetails>
					<Avatar url={contact?.avatar} />
					<Name>{contact?.username}</Name>
				</UserDetails>
				<Logout />
			</Header>
			<Messages></Messages>
		</Container>
	);
};
