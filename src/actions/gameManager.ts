import { createDraft } from 'immer';
import {
  createDeck,
  addCardsToDeck,
  shuffleDeck,
  drawCardsFromDeckToHand,
  drawCardsFromDeckToHeadquarters,
  drawCardFromDeckToAbyss,
} from './deck';
import { removeCardFromHand, discardAllCardsFromHand, moveCardToHand, KOAllWoundsFromHand } from './hand';
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
import WoundCard from '@/cards/WoundCard';
import HandService from '@/services/handService';
import dialogService from '@/helpers/dialog';
import StackService from '@/services/stackService';

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
  //HANDLE END OF TURN CARD EFFECTS
  let promise = Promise.resolve();

  //KO ALL WOUNDS FROM HAND IF NO CARDS ARE BOUGHT OR FOUGHT
  if (HandService.hasWounds() && !StackService.hasBoughtCard() && !StackService.hasFoughtCard()) {
    promise = dialogService
      .openConfirm('Do you want to KO all wounds from your hand')
      .waitForClose()
      .then(() => dispatch(KOAllWoundsFromHand()));
  }

  promise.finally(() => {
    dispatch(resetTurnModifiers());
    dispatch(resetTurnStatistics());
    dispatch(resetAttackPoints());
    dispatch(resetRecruitPoints());
    dispatch(discardAllCardsFromPlayingArea());
    dispatch(discardAllCardsFromHand());
    dispatch(drawCardsFromDeckToHand('PLAYER_1', 6));
    dispatch(addEventToStack('END'));
  });
};

export const startTurn = () => dispatch => {
  dispatch(addEventToStack('START'));
  dispatch(drawVillainCard());
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
  card.setDeckId('PLAYER_1').then(() => {
    dispatch(deductRecruitPoints(currency.spentRecruit || 0));
    dispatch(deductAttackPoints(currency.spentAttack || 0));
    dispatch(removeCardFromHeadquarters(card));
    dispatch(addCardToDiscardPile(card));
    dispatch(drawCardsFromDeckToHeadquarters('HQ', 1));
    dispatch(addEventToStack('BUY', card));
  });
};

export const fightCardFromCity = (card, currency: ICurrency) => dispatch => {
  card
    .fight()
    .then(() => {
      dispatch(deductRecruitPoints(currency.spentRecruit || 0));
      dispatch(deductAttackPoints(currency.spentAttack || 0));
      dispatch(removeCardFromCity(card));
      dispatch(addCardToVictoryPile(card));
      dispatch(addEventToStack('FIGHT', card));
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

export const gainWound = () => dispatch => {
  dispatch(addCardToDiscardPile(new WoundCard()));
  dispatch(addEventToStack('GAIN WOUND'));
};

export default {
  initialise,
};
