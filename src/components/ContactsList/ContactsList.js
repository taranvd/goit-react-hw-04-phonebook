import {
  ButtonClearAll,
  ButtonStyled,
  List,
  ListItem,
} from './ContactsList.style';
export const ContactsList = ({ contacts, deleteContact, onClearAll }) => {
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
      {contacts.length >= 3 && (
        <ButtonClearAll onClick={onClearAll}>Clear all</ButtonClearAll>
      )}
    </List>
  );
};
