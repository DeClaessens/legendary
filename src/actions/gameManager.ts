import { addCardsToDeck, shuffleDeck, drawCardsFromDeck } from './deck';

export const initialise = cards => dispatch => {
  dispatch(addCardsToDeck(cards));
  dispatch(shuffleDeck());
};

export const drawCard = () => dispatch => {
  dispatch(drawCardsFromDeck(1));
};

export default {
  initialise,
};
