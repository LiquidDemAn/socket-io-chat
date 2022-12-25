import { MutableRefObject, useEffect, useRef } from 'react';
import { MessageType, UserType } from '../../redux/services/user/typedef';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
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
import { Socket } from 'socket.io-client';
import { createMessageAction } from '../../redux/services/chats/actions';
import { AppState } from '../../redux/store/typedef';
import { getChat } from '../../redux/services/chats/selectors';

type Props = {
	userId: string;
	contact: UserType;
	socketRef: MutableRefObject<Socket | null>;
};

export const ChatContainer = ({ contact, userId, socketRef }: Props) => {
	const dispatch = useAppDispatch();
	const chat = useAppSelector((state: AppState) => getChat(state, contact._id));

	const scrollRef = useRef<HTMLDivElement | null>(null);

	const handleSendMessage = (text: string) => {
		const message = {
			text,
			from: userId,
			to: contact._id,
		};

		dispatch(createMessageAction({ message })).then((res) => {
			const payload = res.payload as {
				contactId: string;
				message: MessageType;
			};

			socketRef.current?.emit('send-message', {
				...message,
				_id: payload.message._id,
			});
		});
	};

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [chat]);

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
				{chat?.map(({ fromSelf, message, _id }) => (
					<Message key={_id} ref={scrollRef} sended={fromSelf}>
						<MessageText sended={fromSelf}>{message}</MessageText>
					</Message>
				))}
			</Messages>
			<ChatInput handleSend={handleSendMessage} />
		</Container>
	);
};
