/* eslint-disable no-case-declarations */
import produce from 'immer';
import {
  SHUFFLE_DECK,
  ADD_CARDS_TO_DECK,
  DRAW_CARDS_FROM_DECK_TO_HAND,
  CREATE_DECK,
  DRAW_CARDS_FROM_DECK_TO_HEADQUARTERS,
  DRAW_CARDS_FROM_DECK_TO_CITY,
} from '../actions/deck';
import { shuffle } from '../helpers/array';
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';

function decks(state, action) {
  return produce(state, draft => {
    const { decks, hand, stack, headquarters, city } = draft;

    const findDeckById = id => {
      return decks.find(deck => deck.id === id);
    };

    const deck = action.id ? findDeckById(action.id) : null;

    switch (action.type) {
      case CREATE_DECK:
        decks.push({
          id: action.id,
          cards: [],
        });
        break;
      case ADD_CARDS_TO_DECK:
        action.cards.map(card => (card.deckId = deck.id));
        deck.cards.push(...action.cards);
        break;
      case SHUFFLE_DECK:
        deck.cards = shuffle(deck.cards);
        break;
      case DRAW_CARDS_FROM_DECK_TO_HAND:
        for (let i = 0; i < action.amount; i++) {
          hand.push(deck.cards.pop());
        }
        break;
      case DRAW_CARDS_FROM_DECK_TO_HEADQUARTERS:
        for (let i = 0; i < action.amount; i++) {
          headquarters.push(deck.cards.pop());
        }
        break;
      case DRAW_CARDS_FROM_DECK_TO_CITY:
        for (let i = 0; i < action.amount; i++) {
          city.push(deck.cards.pop());
        }
        break;
    }
  });
}

export default decks;
