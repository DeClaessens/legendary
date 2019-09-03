import reduceReducers from 'reduce-reducers';
import decks from './decks';
import hand from './hand';
import discardPile from './discardPile';
import attack from './attack';
import recruit from './recruit';
import playingArea from './playingArea';
import stack from './stack';
import headquarters from './headquarters';
import turnStatistics from './turnStatistics';
import turnModifiers from './turnModifiers';
import city from './city';
import victoryPile from './victoryPile';
import KOPile from './KOPile';
import abyss from './abyss';

const initialState = {
  decks: [],
  hand: [],
  discardPile: [],
  victoryPile: [],
  KOPile: [],
  stack: [],
  abyss: {
    card: null,
  },
  playingArea: {
    cards: [],
  },
  turnStatistics: {
    recruitEarned: 0,
    attackEarned: 0,
    modifiers: [],
  },
  turnModifiers: {
    spendAttackAsRecruit: false,
  },
  headquarters: [],
  city: [],
  attack: 0,
  recruit: 0,
};

export default reduceReducers(
  initialState,
  decks,
  hand,
  discardPile,
  attack,
  recruit,
  playingArea,
  stack,
  headquarters,
  turnModifiers,
  turnStatistics,
  city,
  victoryPile,
  KOPile,
  abyss,
);
