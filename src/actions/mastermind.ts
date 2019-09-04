/*
 * action types
 */
export const CREATE_MASTERMIND = 'CREATE_MASTERMIND';
/*
 * action creators
 */

export function createMastermind(mastermind, tactics) {
  return { type: CREATE_MASTERMIND, mastermind, tactics };
}
