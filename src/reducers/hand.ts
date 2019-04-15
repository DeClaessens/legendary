/* eslint-disable no-case-declarations */
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';
import { PLAY_CARD_FROM_HAND } from '@/actions/hand';

function hand(state, action) {
  switch (action.type) {
    case PLAY_CARD_FROM_HAND:
      console.log('hi');
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default hand;
