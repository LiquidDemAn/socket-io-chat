import styled from 'styled-components';

export const Container = styled.div`
	height: 85vh;
	width: 85vw;
	background-color: #00000076;
	display: grid;
	grid-template-columns: 25% 75%;
`;

export const ChatSideBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	gap: 1rem;
	overflow: hidden;
	padding: 1rem 0;
	background-color: #080420;
`;

export const LogoContactsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 80%;
	gap: 1rem;
`;

export const UserWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	padding: 0 0.5rem;
	color: #fff;
`;

export const UserName = styled.h2``;
