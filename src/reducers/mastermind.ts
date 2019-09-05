/* eslint-disable no-case-declarations */
import produce from 'immer';
import { CREATE_MASTERMIND, REMOVE_TACTIC_FROM_MASTERMIND } from '@/actions/mastermind';
import { shuffle } from '@/helpers/array';

function mastermind(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_MASTERMIND:
        draft.mastermind.card = action.mastermind;
        draft.mastermind.tactics.push(...shuffle(action.tactics));
        break;
      case REMOVE_TACTIC_FROM_MASTERMIND:
        draft.mastermind.tactics = draft.mastermind.tactics.filter(tactic => tactic.id !== action.tactic.id);
        break;
    }
  });
}

export default mastermind;
