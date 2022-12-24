import React from 'react';
import { Container, Image, Name } from './welcome.styled';

type Props = {
	name: string;
};

export const Welcome = ({ name }: Props) => {
	return (
		<Container>
			<Image />
			<h2>
				Welcome, <Name>{name}</Name>
			</h2>
			<p>Please select a chat to Start Messaging</p>
		</Container>
	);
};
