/*
 * action types
 */
export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARDS_TO_DECK = 'ADD_CARDS_TO_DECK';
export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const DRAW_CARDS_FROM_DECK_TO_HAND = 'DRAW_CARDS_FROM_DECK_TO_HAND';
export const DRAW_CARDS_FROM_DECK_TO_HEADQUARTERS = 'DRAW_CARDS_FROM_DECK_TO_HEADQUARTERS';
export const DRAW_CARDS_FROM_DECK_TO_CITY = 'DRAW_CARDS_FROM_DECK_TO_CITY';

/*
 * action creators
 */

export function createDeck(id) {
  return { type: CREATE_DECK, id };
}

export function addCardsToDeck(id, cards) {
  return { type: ADD_CARDS_TO_DECK, id, cards };
}

export function shuffleDeck(id) {
  return { type: SHUFFLE_DECK, id };
}

export function drawCardsFromDeckToHand(id, amount) {
  return { type: DRAW_CARDS_FROM_DECK_TO_HAND, id, amount };
}

export function drawCardsFromDeckToHeadquarters(id, amount) {
  return { type: DRAW_CARDS_FROM_DECK_TO_HEADQUARTERS, id, amount };
}

export function drawCardsFromDeckToCity(id, amount) {
  return { type: DRAW_CARDS_FROM_DECK_TO_CITY, id, amount };
}