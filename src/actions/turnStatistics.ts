/*
 * action types
 */
export const UPDATE_TURN_STATISTICS = 'UPDATE_TURN_STATISTICS';
export const RESET_TURN_STATISTICS = 'RESET_TURN_STATISTICS';

/*
 * action creators
 */

export function updateTurnStatistics(attack, recruit) {
  return { type: UPDATE_TURN_STATISTICS, attack, recruit };
}

export function resetTurnStatistics() {
  return { type: RESET_TURN_STATISTICS };
}
