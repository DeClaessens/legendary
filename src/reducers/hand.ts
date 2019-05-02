/* eslint-disable no-case-declarations */
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';
import { REMOVE_CARD_FROM_HAND } from '@/actions/hand';
import produce from 'immer';

function hand(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case REMOVE_CARD_FROM_HAND:
        draft.hand = draft.hand.filter(card => card.id !== action.card.id);
        break;
    }
  });
}
export default hand;
