import { ADD_COMPONENT } from '../constants';
import initialState from '../../assets/data.json';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      const payload = {
        id: +new Date(),
        ...action.payload,
      };

      console.log('new component', payload);

      return [...state, payload];
    default:
      return state;
  }
};
