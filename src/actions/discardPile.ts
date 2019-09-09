/*
 * action types
 */
export const ADD_CARD_TO_DISCARD_PILE = 'ADD_CARD_TO_DISCARD_PILE';
export const REMOVE_CARD_FROM_DISCARD_PILE = 'REMOVE_CARD_FROM_DISCARD_PILE';

/*
 * action creators
 */

export function addCardToDiscardPile(card) {
  return { type: ADD_CARD_TO_DISCARD_PILE, card };
}

export function removeCardFromDiscardPile(card) {
  return { type: REMOVE_CARD_FROM_DISCARD_PILE, card };
}
