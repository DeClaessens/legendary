/*
 * action types
 */
export const ADD_CARD_TO_VICTORY_PILE = 'ADD_CARD_TO_VICTORY_PILE';

/*
 * action creators
 */

export function addCardToVictoryPile(card) {
  return { type: ADD_CARD_TO_VICTORY_PILE, card };
}
