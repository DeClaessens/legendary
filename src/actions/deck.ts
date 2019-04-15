/*
 * action types
 */
export const ADD_CARDS_TO_DECK = 'ADD_CARDS_TO_DECK';
export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const DRAW_CARDS_FROM_DECK = 'DRAW_CARDS_FROM_DECK';

/*
 * action creators
 */

export function addCardsToDeck(cards) {
  return { type: ADD_CARDS_TO_DECK, cards };
}

export function shuffleDeck() {
  return { type: SHUFFLE_DECK };
}

export function drawCardsFromDeck(amount) {
  return { type: DRAW_CARDS_FROM_DECK, amount };
}
