import styled from 'styled-components';
import loader from '../assets/loader.gif';

type SubmitBtnProps = {
	width?: string;
};

type AvatarProps = {
	url?: string;
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

export const Loader = styled.img.attrs({
	src: loader,
	alt: 'loader',
})``;

export const Avatar = styled.img.attrs<AvatarProps>((props) => ({
	src: `data:image/svg+xml;base64,${props.url}`,
	alt: 'avatar',
}))<AvatarProps>`
	height: 3rem;

	@media (min-width: 992px) {
		height: 5rem;
	}
`;

// {

// }
