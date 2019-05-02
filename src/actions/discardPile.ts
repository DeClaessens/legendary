/*
 * action types
 */
export const ADD_TO_DISCARD_PILE = 'ADD_TO_DISCARD_PILE';

/*
 * action creators
 */

export function createDeck(card) {
  return { type: ADD_TO_DISCARD_PILE, card };
}
