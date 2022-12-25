import styled from 'styled-components';

export const AuthFormWrapper = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	background-color: #00000076;
	border-radius: 2rem;
	padding: 1.5rem 3rem;

	@media (min-width: 576px) {
		padding: 3rem 5rem;
	}
`;

export const AuthFormInput = styled.input`
	background-color: transparent;
	padding: 1rem;
	border: 0.1rem solid #4e0eff;
	border-radius: 0.4rem;
	color: #fff;
	width: 100%;
	font-size: 1rem;

	&:focus {
		border: 0.1rem solid #997af0;
		outline: none;
	}
`;

export const AuthFormAdd = styled.span`
	color: #fff;
	text-transform: uppercase;

	a {
		color: #4e0eff;
		font-weight: 700;
		text-decoration: none;
	}
`;
