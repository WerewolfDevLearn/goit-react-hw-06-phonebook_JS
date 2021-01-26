// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/contacts-actions';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AppStl from './App.module.css';

// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

function App({ contacts }) {
  console.log(actions);
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts
  //   );
  // });

  // useEffect(() => {
  //   console.log('exequting');
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>
      <ContactForm />
      <h2 className={AppStl.heading}>Contacts</h2>

      {contacts.length > 1 && <Filter />}

      {contacts.length > 0 && <ContactsList />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, null)(App);
