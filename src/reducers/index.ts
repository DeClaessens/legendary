import reduceReducers from 'reduce-reducers';
import decks from './decks';
import hand from './hand';
import discardPile from './discardPile';
import attack from './attack';
import recruit from './recruit';
import playingArea from './playingArea';
import stack from './stack';

const initialState = {
  decks: [],
  hand: [],
  discardPile: [],
  stack: [],
  playingArea: {
    cards: [],
  },
  attack: 0,
  recruit: 0,
};

export default reduceReducers(initialState, decks, hand, discardPile, attack, recruit, playingArea, stack);
