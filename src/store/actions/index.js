import { ADD_COMPONENT, REMOVE_COMPONENT } from '../constants';

export const addComponent = (payload) => {
  return {
    type: ADD_COMPONENT,
    payload,
  };
};

export const removeComponent = (payload) => {
  return {
    type: REMOVE_COMPONENT,
    payload,
  };
};
