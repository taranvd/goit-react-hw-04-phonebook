import { useState } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contact', []);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} вже є у списку контактів!`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = idContact => {
    setContacts(prevState => prevState.filter(({ id }) => id !== idContact));
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const resetContactList = () => {
    setContacts([]);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phone Book">
        <ContactForm addContact={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contact">
          <ContactFilter filter={filter} changeFilter={changeFilter} />

          <ContactsList
            contacts={visibleContacts}
            deleteContact={deleteContact}
            onClearAll={resetContactList}
          />
        </Section>
      )}
    </>
  );
};
