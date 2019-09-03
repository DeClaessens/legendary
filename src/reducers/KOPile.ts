/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_CARD_TO_KO_PILE } from '@/actions/KOPile';

function KOPile(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_CARD_TO_KO_PILE:
        draft.KOPile.push(action.card);
        break;
    }
  });
}

export default KOPile;
