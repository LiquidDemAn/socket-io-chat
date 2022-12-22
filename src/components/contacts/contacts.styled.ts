import styled from 'styled-components';

export const ContactsContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 0.2rem;
		padding-left: 2rem;
		&-thumb {
			background-color: #ffffff39;
			width: 0.1rem;
			border-radius: 1rem;
		}
	}
`;

export const Contact = styled.div<{ selected: boolean }>`
	display: flex;
	width: 98%;
	align-items: center;
	background-color: ${(props) => (props.selected ? '#9a86f3' : '#ffffff39')};
	min-height: 5rem;
	gap: 1rem;
	padding: 0.5rem;
	cursor: pointer;
	transition: 0.5s ease-in-out;
`;

export const ContactName = styled.h3``;
