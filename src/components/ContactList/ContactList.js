import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeContact } from '../../redux/contacts-actions';
import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';

function ContactsList({ visibleContacts, onRemoveItem }) {
  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map(visibleContact => (
        <ContactListItem
          contact={visibleContact}
          onRemove={() => onRemoveItem(visibleContact.id)}
          key={visibleContact.id}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),

  onRemoveItem: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
};
const mapStateToProps = state => {
  const { contacts } = state;

  const filtredContacts = getVisibleContacts(contacts.items, contacts.filter);
  return {
    visibleContacts: filtredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveItem: id => dispatch(removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
