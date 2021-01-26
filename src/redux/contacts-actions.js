import { v4 as uuid4 } from 'uuid';
import actionsTypes from './contacts-types';

export const addContact = (name, number) => ({
  type: actionsTypes.ADDCONTACT,
  payload: {
    id: uuid4(),
    name,
    number,
  },
});

export const removeContact = id => ({
  type: actionsTypes.REMOVECONTACT,
  payload: id,
});

export const filterContacts = name => ({
  type: actionsTypes.CONTACTFILTER,
  payload: `${name}`,
});
