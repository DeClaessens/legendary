/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ENABLE_SPEND_RECRUIT_AS_ATTACK_MODIFIER, RESET_TURN_MODIFIERS } from '@/actions/turnModifiers';

function turnModifiers(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ENABLE_SPEND_RECRUIT_AS_ATTACK_MODIFIER:
        draft.turnModifiers.spendRecruitAsAttack = true;
        break;
      case RESET_TURN_MODIFIERS:
        draft.turnModifiers.spendRecruitAsAttack = false;
    }
  });
}

export default turnModifiers;
