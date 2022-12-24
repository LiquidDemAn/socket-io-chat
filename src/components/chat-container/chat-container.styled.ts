import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 0;
	overflow: hidden;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	flex-direction: column-reverse;
	padding: 0 2rem;
	gap: 0.5rem;
	align-items: center;

	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

export const UserDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: #fff;
`;

export const Name = styled.h3``;

export const Messages = styled.div`
	height: 100%;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	overflow: auto;
	&::-webkit-scrollbar {
		width: 0.2rem;
		&-thumb {
			background-color: #ffffff39;
			width: 0.1rem;
			border-radius: 1rem;
		}
	}
`;

export const Message = styled.div<{ sended: boolean }>`
	display: flex;
	align-items: center;
	justify-content: ${({ sended }) => (sended ? 'flex-end' : 'flex-start')};
`;

export const MessageText = styled.p<{ sended: boolean }>`
	max-width: 80%;
	border-radius: 0.5rem;
	padding: 0.5rem;
	background-color: ${({ sended }) => (sended ? '#4f04ff21' : '#9900ff20')};
	overflow-wrap: break-word;
	font-size: 0.8rem;
	color: #d1d1d1;

	@media (min-width: 576px) {
		max-width: 40%;
		font-size: 1.1rem;
		padding: 1rem;
		border-radius: 1rem;
	}
`;
