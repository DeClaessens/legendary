/*
 * action types
 */
export const REMOVE_CARD_FROM_HAND = 'REMOVE_CARD_FROM_HAND';
export const DISCARD_ALL_CARDS_FROM_HAND = 'DISCARD_ALL_CARDS_FROM_HAND';

/*
 * action creators
 */

export function removeCardFromHand(card) {
  return { type: REMOVE_CARD_FROM_HAND, card };
}

export function discardAllCardsFromHand() {
  return { type: DISCARD_ALL_CARDS_FROM_HAND };
}
