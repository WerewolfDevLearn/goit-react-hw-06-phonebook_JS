import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer,
});

export default store;
