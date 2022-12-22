import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

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
