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
import { addAttackPoints, deductAttackPoints } from './attack';
import { addCardToPlayingArea } from './playingArea';
import { addEventToStack } from './stack';
import { removeCardFromHeadquarters } from './headquarters';
import { updateTurnStatistics } from './turnStatistics';
import { removeCardFromCity } from './city';
import { addCardToVictoryPile } from './victoryPile';

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
  dispatch(addEventToStack('Bought a card', card));
};

export const fightCardFromCity = (card, currency: ICurrency) => dispatch => {
  card.fight().then(() => {
    dispatch(deductRecruitPoints(currency.spentRecruit || 0));
    dispatch(deductAttackPoints(currency.spentAttack || 0));
    dispatch(removeCardFromCity(card));
    dispatch(addCardToVictoryPile(card));
  });
};

export const drawCardFromPlayerDeck = id => dispatch => {
  dispatch(drawCardsFromDeckToHand(id, 1));
};

export default {
  initialise,
};
