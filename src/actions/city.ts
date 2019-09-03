/*
 * action types
 */
export const REMOVE_CARD_FROM_CITY = 'REMOVE_CARD_FROM_CITY';
export const MOVE_CARD_TO_CITY = 'MOVE_CARD_TO_CITY';

/*
 * action creators
 */

export function removeCardFromCity(card) {
  return { type: REMOVE_CARD_FROM_CITY, card };
}

export function moveCardToCity(card) {
  return { type: MOVE_CARD_TO_CITY, card };
}
