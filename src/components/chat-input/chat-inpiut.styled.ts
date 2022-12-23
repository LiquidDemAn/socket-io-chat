import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: #080420;
	gap: 2rem;
	padding: 0 2rem;
`;

export const EmojiButtonContainer = styled.div`
	display: flex;
	align-items: center;
	color: #fff;
	gap: 1rem;
`;

export const Emoji = styled.div`
	position: relative;
	cursor: pointer;

	svg {
		font-size: 1.5rem;
		color: #ffff00c8;
	}

	.emoji-picker-react {
		position: absolute;
		top: -350px;
	}
`;

export const InputContainer = styled.form`
	width: 100%;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	gap: 2rem;
	background-color: #ffffff34;
`;

export const InputText = styled.input.attrs({
	placeholder: 'type your message here',
})`
	width: 90%;
	height: 60%;
	background-color: transparent;
	color: #fff;
	border: none;
	padding-left: 1rem;
	font-size: 1.2rem;

	&::selection {
		background-color: #9a86f3;
	}
	&:focus {
		outline: none;
	}
`;

export const ButtonSubmit = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.3rem 2rem;
	border-radius: 2rem;
	border: none;
	cursor: pointer;
	background-color: #9a86f3;
	font-size: 2rem;
	color: #fff;
`;
