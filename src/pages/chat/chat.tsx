import axios from 'axios';
import { useEffect, useState } from 'react';
import { contactsRoute } from '../../utils/APIRoutes';
import { getUser } from '../../utils/local-storage';
import { Container } from './chat.styled';

export const Chat = () => {
	const [contacts, setContacts] = useState([]);
	const user = getUser();

	console.log(contacts);

	const load = async () => {
		const { data } = await axios.get(`${contactsRoute}/${user?._id}`);
		setContacts(data.users);
	};

	useEffect(() => {
		load();
	}, []);

	return <Container>Chat</Container>;
};
