import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contact')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

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

  const resetFilters = () => {
    setFilter('');
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
          <ContactFilter
            filter={filter}
            changeFilter={changeFilter}
            onClearFilters={resetFilters}
          />

          <ContactsList
            contacts={visibleContacts}
            deleteContact={deleteContact}
          />
        </Section>
      )}
    </>
  );
};
