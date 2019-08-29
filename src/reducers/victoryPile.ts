/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_CARD_TO_VICTORY_PILE } from '@/actions/victoryPile';

function victoryPile(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_CARD_TO_VICTORY_PILE:
        draft.victoryPile.push(action.card);
        break;
    }
  });
}

export default victoryPile;
