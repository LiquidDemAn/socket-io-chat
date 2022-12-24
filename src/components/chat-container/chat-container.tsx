import { Dispatch, SetStateAction } from 'react';
import { createMessageAction } from '../../redux/services/user/actions';
import { MessageType, UserType } from '../../redux/services/user/typedef';
import { useAppDispatch } from '../../redux/store/hooks';
import { ChatInput } from '../chat-input';
import { Avatar } from '../common.styled';
import { Logout } from '../logout';
import {
	Container,
	Header,
	UserDetails,
	Name,
	Messages,
	Message,
	MessageText,
} from './chat-container.styled';

type Props = {
	userId: string;
	contact: UserType;
	messages: MessageType[];
	setMessages: Dispatch<SetStateAction<MessageType[]>>;
};

export const ChatContainer = ({
	contact,
	userId,
	setMessages,
	messages,
}: Props) => {
	const dispatch = useAppDispatch();

	const handleSendMessage = (text: string) => {
		const message = {
			text,
			from: userId,
			to: contact._id,
		};

		if (userId) {
			dispatch(createMessageAction({ message, setMessages }));
		}
	};

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
				{messages.map(({ fromSelf, message }) => (
					<Message sended={fromSelf}>
						<MessageText sended={fromSelf}>{message}</MessageText>
					</Message>
				))}
			</Messages>
			<ChatInput handleSend={handleSendMessage} />
		</Container>
	);
};
