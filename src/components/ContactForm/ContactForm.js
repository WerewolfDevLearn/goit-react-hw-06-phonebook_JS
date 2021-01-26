import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts-actions';
import PropTypes from 'prop-types';
import ContactFormStl from './ContactForm.module.css';

function ContactForm({ contacts, onAddContact }) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const onInputValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'contactName':
        setContactName(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const onSubmitContact = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === contactName)) {
      alert(`${contactName} is already in Contacts`);
      return;
    }
    onAddContact(contactName, contactNumber);
    setContactName('');
    setContactNumber('');
  };

  return (
    <form onSubmit={onSubmitContact} className={ContactFormStl.ContactForm}>
      <label className={ContactFormStl.label}>
        Name
        <input
          type="text"
          value={contactName}
          onChange={onInputValue}
          name="contactName"
          className={ContactFormStl.input}
        />
      </label>
      <label className={ContactFormStl.label}>
        Phone Number
        <input
          type="text"
          value={contactNumber}
          onChange={onInputValue}
          name="contactNumber"
          className={ContactFormStl.input}
        />
      </label>
      <button type="submit" className={ContactFormStl.buttonSubmit}>
        Add contact
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) => dispatch(addContact(name, number)),
});

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
