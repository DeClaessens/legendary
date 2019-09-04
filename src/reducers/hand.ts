/* eslint-disable no-case-declarations */
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';
import {
  REMOVE_CARD_FROM_HAND,
  DISCARD_ALL_CARDS_FROM_HAND,
  MOVE_CARD_TO_HAND,
  KO_ALL_WOUNDS_FROM_HAND,
} from '@/actions/hand';
import produce from 'immer';
import { ItemTypes } from '@/helpers/constants';

function hand(state, action) {
  return produce(state, draft => {
    const { hand, discardPile } = draft;
    switch (action.type) {
      case REMOVE_CARD_FROM_HAND:
        draft.hand = draft.hand.filter(card => card.id !== action.card.id);
        break;
      case DISCARD_ALL_CARDS_FROM_HAND:
        const cardsToDiscard = hand;
        draft.discardPile.push(...cardsToDiscard);
        draft.hand = [];
        break;
      case MOVE_CARD_TO_HAND:
        draft.hand.push(action.card);
        break;
      case KO_ALL_WOUNDS_FROM_HAND:
        draft.KOPile.push(...draft.hand.filter(card => card.type === ItemTypes.CARD_TYPES.WOUND));
        draft.hand = draft.hand.filter(card => card.type !== ItemTypes.CARD_TYPES.WOUND);
        break;
    }
  });
}
export default hand;
