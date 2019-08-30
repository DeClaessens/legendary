/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER, RESET_TURN_MODIFIERS } from '@/actions/turnModifiers';

function turnModifiers(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER:
        draft.turnModifiers.spendAttackAsRecruit = true;
        break;
      case RESET_TURN_MODIFIERS:
        draft.turnModifiers.spendAttackAsRecruit = false;
    }
  });
}

export default turnModifiers;
