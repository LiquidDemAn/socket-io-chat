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
	width: 98%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.selected ? '#9a86f3' : '#ffffff39')};
	min-height: auto;
	gap: 0.5rem;
	padding: 0.3rem;
	cursor: pointer;
	transition: 0.5s ease-in-out;

	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
		padding: 0.5rem;
		min-height: 5rem;
	}
`;

export const ContactName = styled.h3`
	display: none;
	@media (min-width: 576px) {
		display: block;
	}
`;
