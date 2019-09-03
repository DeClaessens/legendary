/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_ATTACK_POINTS, DEDUCT_ATTACK_POINTS, RESET_ATTACK_POINTS } from '@/actions/attack';

function attack(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_ATTACK_POINTS:
        draft.attack += action.attackPoints;
        break;
      case DEDUCT_ATTACK_POINTS:
        draft.attack -= action.attackPoints;
        break;
      case RESET_ATTACK_POINTS:
        draft.attack = 0;
    }
  });
}

export default attack;
