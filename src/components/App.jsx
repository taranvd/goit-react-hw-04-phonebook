import { Component } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const contact = localStorage.getItem('contact');
    const parsedContact = JSON.parse(contact);

    if (parsedContact) {
      this.setState({
        contacts: parsedContact,
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    console.log(newContact);
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} вже є у списку контактів!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  resetFilters = () => {
    this.setState({
      contacts: [],
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <>
        <Section title="Phone Book">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contact">
          <ContactFilter
            filter={filter}
            changeFilter={this.changeFilter}
            onClearFilters={this.resetFilters}
          />
          <ContactsList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
