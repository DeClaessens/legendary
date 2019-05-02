import { createDeck, addCardsToDeck, shuffleDeck, drawCardsFromDeckToHand } from './deck';

export const initialise = (id, cards) => dispatch => {
  dispatch(createDeck(id));
  dispatch(addCardsToDeck(id, cards));
  dispatch(shuffleDeck(id));
  dispatch(drawCardsFromDeckToHand(id, 6));
};

export default {
  initialise,
};
