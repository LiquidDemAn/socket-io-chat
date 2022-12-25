import { MutableRefObject, useEffect, useRef, useState } from 'react';
import {
	createMessageAction,
	getMessagesAction,
} from '../../redux/services/user/actions';
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
import { loadChatAction } from '../../redux/services/chats/actions';
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

	console.log(chat);

	const scrollRef = useRef<HTMLDivElement | null>(null);

	const [messages, setMessages] = useState<MessageType[]>([]);
	const [arrivalMessage, setArrivalMessage] = useState<MessageType | null>(
		null
	);

	const handleSendMessage = (text: string) => {
		const message = {
			text,
			from: userId,
			to: contact._id,
		};

		if (userId) {
			dispatch(createMessageAction({ message, setMessages, socketRef }));
		}
	};

	useEffect(() => {
		if (socketRef.current) {
			socketRef.current.on('message-receive', ({ message, _id, from }) => {
				setArrivalMessage({
					_id,
					fromSelf: false,
					message,
					from,
				});
			});
		}
	}, [socketRef]);

	useEffect(() => {
		if (arrivalMessage && arrivalMessage.from === contact._id) {
			setMessages((prev) => [...prev, arrivalMessage]);
			setArrivalMessage(null);
		}
	}, [arrivalMessage, setMessages, contact._id]);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [chat]);

	useEffect(() => {
		// setMessages([]);

		// dispatch(
		// 	getMessagesAction({
		// 		from: userId,
		// 		to: contact._id,
		// 		setMessages,
		// 	})
		// );

		if (!chat) {
			dispatch(loadChatAction({ from: userId, to: contact._id }));
		}
	}, [dispatch, contact, userId, chat]);

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
