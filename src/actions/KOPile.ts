/*
 * action types
 */
export const ADD_CARD_TO_KO_PILE = 'ADD_CARD_TO_KO_PILE';

/*
 * action creators
 */

export function addCardToKOPile(card) {
  return { type: ADD_CARD_TO_KO_PILE, card };
}
