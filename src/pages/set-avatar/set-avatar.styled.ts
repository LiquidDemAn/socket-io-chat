import styled from 'styled-components';

type AvatarWrapperProps = {
	selected: boolean;
};

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 576px) {
		gap: 2rem;
	}
`;
export const Title = styled.h2`
	color: #fff;
	text-align: center;
`;

export const Avatars = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.8rem;

	@media (min-width: 576px) {
		gap: 2rem;
	}
`;

export const AvatarWrapper = styled.div`
	display: flex;
	align-items: center;
	border: 0.2rem solid
		${({ selected }: AvatarWrapperProps) =>
			selected ? ' #4e0eff' : 'transparent'};
	border-radius: 50%;
	padding: 0.2rem;
	transition: 0.5s ease-in-out;
	cursor: pointer;

	@media (min-width: 576px) {
		padding: 0.4rem;
	}
`;
