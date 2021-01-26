import { combineReducers } from 'redux';
import actionsTypes from './contacts-types';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilter = '';

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADDCONTACT:
      return [...state, action.payload];

    case actionsTypes.REMOVECONTACT:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

const filter = (state = initialFilter, action) => {
  switch (action.type) {
    case actionsTypes.CONTACTFILTER:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
