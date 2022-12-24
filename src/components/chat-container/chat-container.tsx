import { createMessageAction } from '../../redux/services/user/actions';
import { UserType } from '../../redux/services/user/typedef';
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
} from './chat-container.styled';

type Props = {
	userId: string;
	contact: UserType;
};

export const ChatContainer = ({ contact, userId }: Props) => {
	const dispatch = useAppDispatch();

	const handleSendMessage = (text: string) => {
		alert(text);

		const message = {
			text,
			from: userId,
			to: contact._id,
		};

		if (userId) {
			dispatch(createMessageAction(message));
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
			<Messages></Messages>
			<ChatInput handleSend={handleSendMessage} />
		</Container>
	);
};
