/* eslint-disable no-case-declarations */
import produce from 'immer';
import { SHUFFLE_DECK, ADD_CARDS_TO_DECK, DRAW_CARDS_FROM_DECK } from '../actions/deck';
import { shuffle } from '../helpers/array';
import { uniqueid } from '@/helpers/uid';
import addToStack, { StackTypes } from '@/helpers/stack';

function deck(state, action) {
  return produce(state, draft => {
    const { deck, hand, stack } = draft;

    switch (action.type) {
      case ADD_CARDS_TO_DECK:
        action.cards.map(card => (card.id = uniqueid()));
        deck.push(...action.cards);
        break;
      case SHUFFLE_DECK:
        draft.deck = shuffle(deck);
        break;
      case DRAW_CARDS_FROM_DECK:
        const newCard = deck.slice(-1)[0];
        draft.deck = deck.filter(card => card.id !== newCard.id);
        hand.push(newCard);
        stack.push(addToStack({ msg: `Drew card: ${newCard.name}`, data: newCard, type: StackTypes.CARD }));
        break;
    }
  });
}

export default deck;
