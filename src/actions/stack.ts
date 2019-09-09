/*
 * action types
 */
export const ADD_EVENT_TO_STACK = 'ADD_EVENT_TO_STACK';
export const CLEAR_STACK = 'CLEAR_STACK';
/*
 * action creators
 */

export function addEventToStack(message, card = null) {
  return { type: ADD_EVENT_TO_STACK, message, card };
}

export function clearStack() {
  return { type: CLEAR_STACK };
}
