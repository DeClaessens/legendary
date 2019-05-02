/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_TO_DISCARD_PILE } from '@/actions/discardPile';

function discardPile(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_TO_DISCARD_PILE:
        break;
    }
  });
}

export default discardPile;
