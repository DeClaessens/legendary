import { createDraft } from 'immer';
import {
  createDeck,
  addCardsToDeck,
  shuffleDeck,
  drawCardsFromDeckToHand,
  drawCardsFromDeckToHeadquarters,
  drawCardFromDeckToAbyss,
} from './deck';
import { removeCardFromHand, discardAllCardsFromHand, moveCardToHand } from './hand';
import { addCardToDiscardPile } from './discardPile';
import { addRecruitPoints, deductRecruitPoints, resetRecruitPoints } from './recruit';
import { addAttackPoints, deductAttackPoints, resetAttackPoints } from './attack';
import { addCardToPlayingArea, discardAllCardsFromPlayingArea, removeCardFromPlayingArea } from './playingArea';
import { addEventToStack } from './stack';
import { removeCardFromHeadquarters } from './headquarters';
import { updateTurnStatistics, resetTurnStatistics } from './turnStatistics';
import { removeCardFromCity } from './city';
import { addCardToVictoryPile } from './victoryPile';
import { resetTurnModifiers } from './turnModifiers';
import { ItemTypes } from '@/helpers/constants';
import { addCardToKOPile } from './KOPile';
import { store } from '..';
import { clearAbyss } from './abyss';

export const createAndFillDeck = (id, cards) => dispatch => {
  dispatch(createDeck(id));
  dispatch(addCardsToDeck(id, cards));
  dispatch(shuffleDeck(id));
};

export const initialise = () => dispatch => {
  dispatch(drawCardsFromDeckToHand('PLAYER_1', 6));
  dispatch(drawCardsFromDeckToHeadquarters('HQ', 5));
  dispatch(drawVillainCard());
};

export const endTurn = () => dispatch => {
  dispatch(resetTurnModifiers());
  dispatch(resetTurnStatistics());
  dispatch(resetAttackPoints());
  dispatch(resetRecruitPoints());
  dispatch(discardAllCardsFromPlayingArea());
  dispatch(discardAllCardsFromHand());
  dispatch(drawCardsFromDeckToHand('PLAYER_1', 6));
  dispatch(addEventToStack('END'));
};

export const drawVillainCard = () => dispatch => {
  const draw = () => Promise.resolve(dispatch(drawCardFromDeckToAbyss('VILLAIN')));

  return draw()
    .then(() => {
      const { abyss } = store.getState();
      return abyss.card.whenDrawn();
    })
    .then(() => clearAbyss());
};

export const startTurn = () => dispatch => {
  dispatch(addEventToStack('START'));
  dispatch(drawVillainCard());
};

export const playCardFromHand = card => dispatch => {
  card.action().then(() => {
    dispatch(removeCardFromHand(card));
    dispatch(addCardToPlayingArea(card));
    dispatch(addRecruitPoints(card.recruit));
    dispatch(addAttackPoints(card.attack));
    dispatch(updateTurnStatistics(card.attack, card.recruit));
    dispatch(addEventToStack('PLAY', card));
  });
};

export const drawCardFromDeckToHeadquarters = (id = 'HQ', amount = 1) => dispatch => {
  dispatch(drawCardsFromDeckToHeadquarters(id, amount));
};

interface ICurrency {
  spentAttack?: number;
  spentRecruit?: number;
}

export const buyCardFromHeadquarters = (card, currency: ICurrency) => dispatch => {
  dispatch(deductRecruitPoints(currency.spentRecruit || 0));
  dispatch(deductAttackPoints(currency.spentAttack || 0));
  dispatch(removeCardFromHeadquarters(card));
  dispatch(addCardToDiscardPile(card));
  dispatch(drawCardsFromDeckToHeadquarters('HQ', 1));
  dispatch(addEventToStack('BUY', card));
};

export const fightCardFromCity = (card, currency: ICurrency) => dispatch => {
  card
    .fight()
    .then(() => {
      dispatch(deductRecruitPoints(currency.spentRecruit || 0));
      dispatch(deductAttackPoints(currency.spentAttack || 0));
      dispatch(removeCardFromCity(card));
      dispatch(addCardToVictoryPile(card));
    })
    .catch(err => console.log('user cancelled the fight'));
};

export const drawCardFromPlayerDeck = id => dispatch => {
  dispatch(drawCardsFromDeckToHand(id, 1));
};

export const KOCard = (card, from) => dispatch => {
  if (from === ItemTypes.CARDS.FROM_HAND) dispatch(removeCardFromHand(card));
  if (from === ItemTypes.CARDS.FROM_PLAYING_AREA) dispatch(removeCardFromPlayingArea(card));

  dispatch(addCardToKOPile(card));
};

export default {
  initialise,
};
