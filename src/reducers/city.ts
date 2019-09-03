/* eslint-disable no-case-declarations */
import produce from 'immer';
import { REMOVE_CARD_FROM_CITY, MOVE_CARD_TO_CITY } from '@/actions/city';

function city(state, action) {
  return produce(state, draft => {
    const { city } = draft;
    switch (action.type) {
      case REMOVE_CARD_FROM_CITY:
        draft.city = city.filter(card => card.id !== action.card.id);
        break;
      case MOVE_CARD_TO_CITY:
        city.push(action.card);
        break;
    }
  });
}

export default city;
