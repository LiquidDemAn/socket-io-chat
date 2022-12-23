import React from 'react';
import { UserType } from '../../redux/services/user/typedef';
import { ChatInput } from '../chat-input';
import { Avatar } from '../common.styled';
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
			<Messages>
				
			</Messages>
			<ChatInput />
		</Container>
	);
};