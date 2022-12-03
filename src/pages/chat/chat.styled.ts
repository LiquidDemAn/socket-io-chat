import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

export const FormContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	background-color: #131324;
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	background-color: #00000076;
	border-radius: 2rem;
	padding: 3rem 5rem;
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
`;

export const LogoImg = styled.img.attrs({
	src: Logo,
	alt: 'logo',
})`
	height: 5rem;
`;

export const LogoText = styled.h1`
	color: #fff;
	text-transform: uppercase;
`;

export const FormInput = styled.input`
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

export const FormButton = styled.button`
	background-color: #997af0;
	padding: 1rem 2rem;
	width: 100%;
	color: #fff;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 700;
	cursor: pointer;
	transition 0.5s ease-in-out;

	&:hover {
		background-color: #4e0eff
	}
`;

export const FormAdd = styled.span`
	color: #fff;
	text-transform: uppercase;

	a {
		color: #4e0eff;
		font-weight: 700;
		text-decoration: none;
	}
`;
