/*
 * action types
 */
export const CREATE_MASTERMIND = 'CREATE_MASTERMIND';
export const REMOVE_TACTIC_FROM_MASTERMIND = 'REMOVE_TACTIC_FROM_MASTERMIND';
/*
 * action creators
 */

export function createMastermind(mastermind, tactics) {
  return { type: CREATE_MASTERMIND, mastermind, tactics };
}

export function removeTacticFromMastermind(tactic) {
  return { type: REMOVE_TACTIC_FROM_MASTERMIND, tactic };
}
