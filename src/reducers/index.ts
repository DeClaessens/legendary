import reduceReducers from 'reduce-reducers';
import decks from './decks';
import hand from './hand';
import discardPile from './discardPile';

const initialState = {
  decks: [],
  hand: [],
  discardPile: [],
  stack: [],
};

export default reduceReducers(initialState, decks, hand, discardPile);
