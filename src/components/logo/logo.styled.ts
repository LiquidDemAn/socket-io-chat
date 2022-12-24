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
	height: 3rem;

	@media (min-width: 992px) {
		height: 5rem;
	}
`;

export const LogoText = styled.h1`
	display: none;
	color: #fff;
	text-transform: uppercase;

	@media (min-width: 992px) {
		display: block;
	}
`;
