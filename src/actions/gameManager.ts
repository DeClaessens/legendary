import { createDraft } from 'immer';
import {
  createDeck,
  addCardsToDeck,
  shuffleDeck,
  drawCardsFromDeckToHand,
  drawCardsFromDeckToHeadquarters,
  drawCardsFromDeckToCity,
} from './deck';
import { removeCardFromHand } from './hand';
import { addCardToDiscardPile } from './discardPile';
import { addRecruitPoints, deductRecruitPoints } from './recruit';
import { addAttackPoints } from './attack';
import { addCardToPlayingArea } from './playingArea';
import { addEventToStack } from './stack';
import EndlessInventionIronMan from '@/cards/core/ironMan/EndlessInventionIronMan';
import { removeCardFromHeadquarters } from './headquarters';
import { updateTurnStatistics } from './turnStatistics';

export const createAndFillDeck = (id, cards) => dispatch => {
  dispatch(createDeck(id));
  dispatch(addCardsToDeck(id, cards));
  dispatch(shuffleDeck(id));
};

export const initialise = () => dispatch => {
  dispatch(drawCardsFromDeckToHand('PLAYER_1', 6));
  dispatch(drawCardsFromDeckToHeadquarters('HQ', 5));
  dispatch(drawCardsFromDeckToCity('VILLAIN', 1));
};

export const playCardFromHand = card => dispatch => {
  card.action().then(() => {
    dispatch(removeCardFromHand(card));
    dispatch(addCardToPlayingArea(card));
    dispatch(addRecruitPoints(card.recruit));
    dispatch(addAttackPoints(card.attack));
    dispatch(updateTurnStatistics(card.attack, card.recruit));
    dispatch(addEventToStack('Played a card', card));
  });
};

export const drawCardFromDeckToHeadquarters = (id = 'HQ', amount = 1) => dispatch => {
  dispatch(drawCardsFromDeckToHeadquarters(id, amount));
};

export const buyCardFromHeadquarters = card => dispatch => {
  dispatch(removeCardFromHeadquarters(card));
  dispatch(deductRecruitPoints(card.cost));
  dispatch(addCardToDiscardPile(card));
  dispatch(drawCardsFromDeckToHeadquarters('HQ', 1));
};

export const fightCardFromCity = card => dispatch => {
  // do something
  // removeCardFromCity
  // deductAttackPoints
  // addCardToVictoryPile
};

export const drawCardFromPlayerDeck = id => dispatch => {
  dispatch(drawCardsFromDeckToHand(id, 1));
};

export default {
  initialise,
};
