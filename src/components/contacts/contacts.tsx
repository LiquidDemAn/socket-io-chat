import { UserType } from '../../redux/services/user/typedef';
import { Avatar } from '../common';
import { Contact, ContactName, ContactsContainer } from './contacts.styled';

type Props = {
	contacts?: UserType[] | null;
	changeContact: (contact: UserType) => void;
	selectedContactId?: string;
};

export const Contacts = ({
	contacts,
	changeContact,
	selectedContactId,
}: Props) => {
	return (
		<ContactsContainer>
			{contacts?.map((contact) => (
				<Contact
					selected={selectedContactId === contact._id}
					onClick={() => changeContact(contact)}
				>
					<Avatar url={contact.avatar} />
					<ContactName>{contact.username}</ContactName>
				</Contact>
			))}
		</ContactsContainer>
	);
};
