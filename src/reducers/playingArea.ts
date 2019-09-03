/* eslint-disable no-case-declarations */
import produce from 'immer';
import {
  ADD_CARD_TO_PLAYING_AREA,
  REMOVE_CARD_FROM_PLAYING_AREA,
  DISCARD_ALL_CARDS_FROM_PLAYING_AREA,
} from '@/actions/playingArea';

function playingArea(state, action) {
  return produce(state, draft => {
    const { playingArea, discardPile } = draft;
    switch (action.type) {
      case ADD_CARD_TO_PLAYING_AREA:
        playingArea.cards.push(action.card);
        break;
      case REMOVE_CARD_FROM_PLAYING_AREA:
        draft.playingArea.cards = playingArea.cards.filter(card => card.id !== action.card.id);
        break;
      case DISCARD_ALL_CARDS_FROM_PLAYING_AREA:
        const cardsToDiscard = playingArea.cards;
        discardPile.push(...cardsToDiscard);
        draft.playingArea.cards = [];
        break;
    }
  });
}

export default playingArea;
