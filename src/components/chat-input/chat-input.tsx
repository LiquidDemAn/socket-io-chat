import {
	Container,
	EmojiButtonContainer,
	Emoji,
	InputContainer,
	InputText,
	ButtonSubmit,
} from './chat-inpiut.styled';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { ChangeEvent, FormEvent, useState } from 'react';

type Props = {
	handleSend: (message: string) => void;
};

export const ChatInput = ({ handleSend }: Props) => {
	const [showEmoji, setShowEmoji] = useState(false);
	const [message, setMessage] = useState('');

	const onShowEmoji = () => {
		setShowEmoji(true);
	};

	const onHideEmoji = () => {
		setShowEmoji(false);
	};

	const handleEmojiSelect = (
		emojiObject: EmojiClickData,
		event: MouseEvent
	) => {
		setMessage((prev) => prev + emojiObject.emoji);
	};

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const sendMessage = (event: FormEvent) => {
		event.preventDefault();

		if (message.length > 0) {
			setMessage('');
			handleSend(message);
		}
	};

	return (
		<Container>
			<EmojiButtonContainer>
				<Emoji onMouseEnter={onShowEmoji} onMouseLeave={onHideEmoji}>
					<BsEmojiSmileFill />
					{showEmoji && <Picker onEmojiClick={handleEmojiSelect} />}
				</Emoji>
			</EmojiButtonContainer>
			<InputContainer onSubmit={sendMessage}>
				<InputText onChange={handleChangeInput} value={message} />
				<ButtonSubmit>
					<IoMdSend />
				</ButtonSubmit>
			</InputContainer>
		</Container>
	);
};
