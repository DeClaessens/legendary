/* eslint-disable no-case-declarations */
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';
import { PLAY_CARD_FROM_HAND } from '@/actions/hand';
import produce from 'immer';

function hand(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case PLAY_CARD_FROM_HAND:
        return {
          ...state,
        };
    }
  });
}
export default hand;
