/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_CARD_TO_DISCARD_PILE, REMOVE_CARD_FROM_DISCARD_PILE } from '@/actions/discardPile';

function discardPile(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_CARD_TO_DISCARD_PILE:
        draft.discardPile.push(action.card);
        break;
      case REMOVE_CARD_FROM_DISCARD_PILE:
        draft.discardPile = draft.discardPile.filter(card => card.id !== action.card.id);
        break;
    }
  });
}

export default discardPile;
