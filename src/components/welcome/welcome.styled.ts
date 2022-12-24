import styled from 'styled-components';
import Robot from '../../assets/robot.gif';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #fff;
	text-align: center;
	padding: 0 1rem;
`;

export const Image = styled.img.attrs({
	src: Robot,
	alt: 'Robot',
})`
	display: none;
	height: 20rem;

	@media (min-width: 576px) {
		display: block;
	}
`;

export const Title = styled.h2``;
export const Text = styled.p``;

export const Name = styled.span`
	color: #4e0eff;
`;
