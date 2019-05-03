import { createDeck, addCardsToDeck, shuffleDeck, drawCardsFromDeckToHand } from './deck';
import { removeCardFromHand } from './hand';
import { addCardToDiscardPile } from './discardPile';
import { addRecruitPoints } from './recruit';
import { addAttackPoints } from './attack';
import { addCardToPlayingArea } from './playingArea';
import { addEventToStack } from './stack';

export const initialise = (id, cards) => dispatch => {
  dispatch(createDeck(id));
  dispatch(addCardsToDeck(id, cards));
  dispatch(shuffleDeck(id));
  dispatch(drawCardsFromDeckToHand(id, 6));
};

export const playCardFromHand = card => dispatch => {
  dispatch(removeCardFromHand(card));
  dispatch(addCardToPlayingArea(card));
  if (typeof card.action !== undefined) card.action();
  dispatch(addRecruitPoints(card.recruit));
  dispatch(addAttackPoints(card.attack));
  dispatch(addEventToStack('Played a card', card));
};

export const drawCardFromPlayerDeck = id => dispatch => {
  dispatch(drawCardsFromDeckToHand(id, 1));
};

export default {
  initialise,
};
