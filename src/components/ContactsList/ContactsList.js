import { ButtonStyled, List, ListItem } from './ContactsList.style';
export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <span style={{ textAlign: 'center' }}>{contact.name} </span>
          <span style={{ textAlign: 'center' }}>{contact.number}</span>
          <ButtonStyled onClick={() => deleteContact(contact.id)}>
            Delete
          </ButtonStyled>
        </ListItem>
      ))}
    </List>
  );
};
