/* eslint-disable no-case-declarations */
import produce from 'immer';
import { REMOVE_CARD_FROM_HEADQUARTERS } from '@/actions/headquarters';

function headquarters(state, action) {
  return produce(state, draft => {
    const { headquarters } = draft;
    switch (action.type) {
      case REMOVE_CARD_FROM_HEADQUARTERS:
        draft.headquarters = headquarters.filter(card => card.id !== action.card.id);
        break;
    }
  });
}

export default headquarters;
