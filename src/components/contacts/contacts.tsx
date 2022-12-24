import { UserType } from '../../redux/services/user/typedef';
import { Avatar } from '../common.styled';
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
					key={contact._id}
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
