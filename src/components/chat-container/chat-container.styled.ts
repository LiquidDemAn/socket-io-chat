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
	align-items: center;
	padding: 0 2rem;
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
	max-width: 40%;
	border-radius: 1rem;
	padding: 1rem;
	background-color: ${({ sended }) => (sended ? '#4f04ff21' : '#9900ff20')};
	overflow-wrap: break-word;
	font-size: 1.1rem;
	color: #d1d1d1;
`;
