/* eslint-disable no-case-declarations */
import produce from 'immer';
import { CLEAR_ABYSS } from '@/actions/abyss';

function abyss(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CLEAR_ABYSS:
        draft.abyss = { card: null };
        break;
    }
  });
}

export default abyss;
