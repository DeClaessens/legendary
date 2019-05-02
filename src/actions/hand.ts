/*
 * action types
 */
export const REMOVE_CARD_FROM_HAND = 'REMOVE_CARD_FROM_HAND';

/*
 * action creators
 */

export function removeCardFromHand(card) {
  return { type: REMOVE_CARD_FROM_HAND, card };
}
