import { createDeck, addCardsToDeck, shuffleDeck, drawCardsFromDeckToHand } from './deck';
import { removeCardFromHand } from './hand';
import { addCardToDiscardPile } from './discardPile';
import { addRecruitPoints } from './recruit';
import { addAttackPoints } from './attack';
import { addCardToPlayingArea } from './playingArea';

export const initialise = (id, cards) => dispatch => {
  dispatch(createDeck(id));
  dispatch(addCardsToDeck(id, cards));
  dispatch(shuffleDeck(id));
  dispatch(drawCardsFromDeckToHand(id, 6));
};

export const playCardFromHand = card => dispatch => {
  dispatch(removeCardFromHand(card));
  dispatch(addCardToPlayingArea(card));
  dispatch(addRecruitPoints(card.recruit));
  dispatch(addAttackPoints(card.attack));
};

export default {
  initialise,
};
