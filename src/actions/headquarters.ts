/*
 * action types
 */
export const REMOVE_CARD_FROM_HEADQUARTERS = 'REMOVE_CARD_FROM_HEADQUARTERS';

/*
 * action creators
 */

export function removeCardFromHeadquarters(card) {
  return { type: REMOVE_CARD_FROM_HEADQUARTERS, card };
}
