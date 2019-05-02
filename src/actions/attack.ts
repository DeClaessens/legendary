/*
 * action types
 */
export const ADD_ATTACK_POINTS = 'ADD_ATTACK_POINTS';

/*
 * action creators
 */

export function addAttackPoints(attackPoints) {
  return { type: ADD_ATTACK_POINTS, attackPoints };
}
