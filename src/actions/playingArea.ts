/*
 * action types
 */
export const ADD_CARD_TO_PLAYING_AREA = 'ADD_CARD_TO_PLAYING_AREA';
export const REMOVE_CARD_FROM_PLAYING_AREA = 'REMOVE_CARD_FROM_PLAYING_AREA';
export const DISCARD_ALL_CARDS_FROM_PLAYING_AREA = 'DISCARD_ALL_CARDS_FROM_PLAYING_AREA';

/*
 * action creators
 */

export function addCardToPlayingArea(card) {
  return { type: ADD_CARD_TO_PLAYING_AREA, card };
}

export function removeCardFromPlayingArea(card) {
  return { type: REMOVE_CARD_FROM_PLAYING_AREA, card };
}

export function discardAllCardsFromPlayingArea() {
  return { type: DISCARD_ALL_CARDS_FROM_PLAYING_AREA };
}
