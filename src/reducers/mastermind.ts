/* eslint-disable no-case-declarations */
import produce from 'immer';
import { CREATE_MASTERMIND } from '@/actions/mastermind';

function mastermind(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_MASTERMIND:
        draft.mastermind.card = action.mastermind;
        draft.mastermind.tactics.push(...action.tactics);
        break;
    }
  });
}

export default mastermind;
