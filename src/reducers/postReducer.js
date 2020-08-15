import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: payload,
      };
    case NEW_POST:
      break;

    default:
      return state;
  }
}
