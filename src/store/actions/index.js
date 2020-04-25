import { ADD_COMPONENT } from '../constants';

export const addComponent = (payload) => {
  return {
    type: ADD_COMPONENT,
    payload,
  };
};
