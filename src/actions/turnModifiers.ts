/*
 * action types
 */
export const ENABLE_SPEND_RECRUIT_AS_ATTACK_MODIFIER = 'ENABLE_SPEND_RECRUIT_AS_ATTACK_MODIFIER';
export const RESET_TURN_MODIFIERS = 'RESET_TURN_MODIFIERS';

/*
 * action creators
 */

export function enableSpendRecruitAsAttackModifier() {
  return { type: ENABLE_SPEND_RECRUIT_AS_ATTACK_MODIFIER };
}

export function resetTurnModifiers() {
  return { type: RESET_TURN_MODIFIERS };
}
