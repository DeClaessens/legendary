/* eslint-disable no-case-declarations */
import { SHUFFLE_DECK, ADD_CARDS_TO_DECK, DRAW_CARDS_FROM_DECK } from '../actions/deck';
import { shuffle } from '../helpers/array';
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';

function deck(state, action) {
  const { deck, hand, stack } = state;
  switch (action.type) {
    case ADD_CARDS_TO_DECK:
      action.cards.map(card => (card.id = uniqueid()));
      return { ...state, deck: action.cards };
    case SHUFFLE_DECK:
      return {
        ...state,
        deck: shuffle(deck),
        stack: [...stack, addToStack({ msg: `Shuffled Deck`, type: StackTypes.MANAGEMENT })],
      };
    case DRAW_CARDS_FROM_DECK:
      const newCard = deck.slice(-1)[0];
      return {
        ...state,
        deck: deck.filter(card => card.id !== newCard.id),
        hand: [...hand, newCard],
        stack: [...stack, addToStack({ msg: `Drew card: ${newCard.name}`, data: newCard, type: StackTypes.CARD })],
      };
    default:
      return state;
  }
}
export default deck;
