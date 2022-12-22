import { UserType } from '../../redux/services/user/typedef';
import { Avatar } from '../common';
import { Contact, ContactName, ContactsContainer } from './contacts.styled';

type Props = {
	user?: UserType | null;
	contacts?: UserType[] | null;
	changeChat: (id: string, contact: UserType) => void;
	selectedContact: string | null;
};

export const Contacts = ({
	user,
	contacts,
	changeChat,
	selectedContact,
}: Props) => {
	return (
		<ContactsContainer>
			{contacts?.map((contact) => (
				<Contact
					selected={selectedContact === contact._id}
					onClick={() => changeChat(contact._id, contact)}
				>
					<Avatar url={contact.avatar} />
					<ContactName>{contact.username}</ContactName>
				</Contact>
			))}
		</ContactsContainer>
	);
};
