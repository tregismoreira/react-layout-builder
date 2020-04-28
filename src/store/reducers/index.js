import { ADD_COMPONENT, REMOVE_COMPONENT } from '../constants';
import initialState from '../../assets/data.json';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      const payload = {
        id: +new Date(),
        ...action.payload,
      };

      return [...state, payload];

    case REMOVE_COMPONENT:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};
