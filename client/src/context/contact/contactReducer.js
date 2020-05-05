import React from 'react';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch(action.type){
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
        // if the contact's id that we're iterating thru is equal to the one in the payload, set that element of the array to the contact object in the payload, otherwise set the element to the contact as is
        contact => contact.id === action.payload.id ? action.payload : contact
        )
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "gi");
          // returns any contact where name or email matches the text passed in
          return contact.name.match(regex) || contact.email.match(regex);
          
          // return contact.name.toLowerCase().includes(action.payload.toLowerCase()) || contact.email.toLowerCase().match(regextoLowerCase());
        })
      }
    case CLEAR_FILTER:
    return {
      ...state,
      filtered: null
    }

    default: return state;
  }
}