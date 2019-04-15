import reduceReducers from 'reduce-reducers';
import deck from './deck';
import hand from './hand';

const initialState = {
  deck: [],
  hand: [],
  stack: [],
};

export default reduceReducers(initialState, deck, hand);
