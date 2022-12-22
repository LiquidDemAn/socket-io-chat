import styled from 'styled-components';

export const Container = styled.div`
	height: 85vh;
	width: 85vw;
	background-color: #00000076;
	display: grid;
	grid-template-columns: 25% 75%;
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	gap: 1rem;
	overflow: hidden;
	padding: 1rem 0;
	background-color: #080420;
`;

export const User = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: #0d0d30;
`;
export const UserName = styled.h2``;
