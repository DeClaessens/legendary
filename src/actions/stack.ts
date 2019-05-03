/*
 * action types
 */
export const ADD_EVENT_TO_STACK = 'ADD_EVENT_TO_STACK';

/*
 * action creators
 */

export function addEventToStack(message, card) {
  return { type: ADD_EVENT_TO_STACK, message, card };
}
