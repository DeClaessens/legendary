/*
 * action types
 */
export const ADD_CARD_TO_PLAYING_AREA = 'ADD_CARD_TO_PLAYING_AREA';

/*
 * action creators
 */

export function addCardToPlayingArea(card) {
  return { type: ADD_CARD_TO_PLAYING_AREA, card };
}
