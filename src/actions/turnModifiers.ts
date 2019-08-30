/*
 * action types
 */
export const ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER = 'ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER';
export const RESET_TURN_MODIFIERS = 'RESET_TURN_MODIFIERS';

/*
 * action creators
 */

export function enableSpendAttackAsRecruitModifier() {
  return { type: ENABLE_SPEND_ATTACK_AS_RECRUIT_MODIFIER };
}

export function resetTurnModifiers() {
  return { type: RESET_TURN_MODIFIERS };
}
