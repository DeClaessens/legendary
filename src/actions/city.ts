/*
 * action types
 */
export const REMOVE_CARD_FROM_CITY = 'REMOVE_CARD_FROM_CITY';

/*
 * action creators
 */

export function removeCardFromCity(card) {
  return { type: REMOVE_CARD_FROM_CITY, card };
}
