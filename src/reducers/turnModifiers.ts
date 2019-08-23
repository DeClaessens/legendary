/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER } from '@/actions/turnModifiers';

function turnModifiers(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER:
        console.log('enabling');
        draft.turnModifiers.spendAttackAsRecruit = true;
        break;
    }
  });
}

export default turnModifiers;
