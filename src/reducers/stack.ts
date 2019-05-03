/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_EVENT_TO_STACK } from '@/actions/stack';

function stack(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_EVENT_TO_STACK:
        draft.stack.push({ message: action.message, card: action.card });
        break;
    }
  });
}

export default stack;
