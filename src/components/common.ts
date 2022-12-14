import styled from 'styled-components';

type SubmitBtnProps = {
	width?: string;
};

export const SubmitBtn = styled.button`
	background-color: #997af0;
	padding: 1rem 2rem;
	width: ${({ width }: SubmitBtnProps) => (width ? width : 'auto')};
	color: #fff;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 700;
	cursor: pointer;
	transition: 0.5s ease-in-out;

	&:hover {
		background-color: #4e0eff;
	}
`;
