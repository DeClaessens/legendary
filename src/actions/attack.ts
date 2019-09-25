/*
 * action types
 */
export const ADD_ATTACK_POINTS = 'ADD_ATTACK_POINTS';
export const DEDUCT_ATTACK_POINTS = 'DEDUCT_ATTACK_POINTS';
export const RESET_ATTACK_POINTS = 'RESET_ATTACK_POINTS';

/*
 * action creators
 */

export function addAttackPoints(attackPoints) {
  return { type: ADD_ATTACK_POINTS, payload: { attackPoints } };
}

export function deductAttackPoints(attackPoints) {
  return { type: DEDUCT_ATTACK_POINTS, payload: { attackPoints } };
}

export function resetAttackPoints() {
  return { type: RESET_ATTACK_POINTS };
}
