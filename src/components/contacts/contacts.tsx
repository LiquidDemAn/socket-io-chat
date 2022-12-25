import { ChatsType } from '../../redux/services/chats/typedef';
import { UserType } from '../../redux/services/user/typedef';
import { Avatar } from '../common.styled';
import { Contact, ContactName, ContactsContainer, NewMessages } from './contacts.styled';

type Props = {
	contacts?: UserType[] | null;
	changeContact: (contact: UserType) => void;
	selectedContactId?: string;
	arrivalChats?: ChatsType;
};

export const Contacts = ({
	contacts,
	changeContact,
	selectedContactId,
	arrivalChats,
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
					{arrivalChats &&
						arrivalChats[contact._id] &&
						selectedContactId !== contact._id && (
							<NewMessages>{arrivalChats[contact._id].length} New Messages</NewMessages>
						)}
				</Contact>
			))}
		</ContactsContainer>
	);
};
