import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0 0.5rem;

	@media (min-width: 576px) {
		padding: 0 2rem;
		gap: 2rem;
	}
`;

export const EmojiButtonContainer = styled.div`
	display: none;
	align-items: center;
	color: #fff;
	gap: 1rem;

	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Emoji = styled.div`
	position: relative;
	cursor: pointer;

	svg {
		font-size: 1.5rem;
		color: #ffff00c8;
	}

	aside {
		position: absolute !important;
		top: -470px;
	}
`;

export const InputContainer = styled.form`
	width: 100%;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	gap: 0;
	background-color: #ffffff34;

	@media (min-width: 576px) {
		gap: 2rem;
	}
`;

export const InputText = styled.input.attrs({
	placeholder: 'type your message here',
})`
	width: 90%;
	height: 60%;
	background-color: transparent;
	color: #fff;
	border: none;
	padding: 0.5rem 0 0.5rem 1rem;
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
	padding: 0.5rem;
	border-radius: 2rem;
	border: none;
	cursor: pointer;
	background-color: #9a86f3;
	font-size: 1rem;
	color: #fff;

	@media (min-width: 576px) {
		padding: 0.3rem 2rem;
		font-size: 2rem;
	}
`;
