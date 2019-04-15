/*
 * action types
 */
export const PLAY_CARD_FROM_HAND = 'PLAY_CARD_FROM_HAND';

/*
 * action creators
 */

export function playCardFromHand(card) {
  return { type: PLAY_CARD_FROM_HAND, card };
}
