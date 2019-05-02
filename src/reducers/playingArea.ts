/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_CARD_TO_PLAYING_AREA } from '@/actions/playingArea';

function playingArea(state, action) {
  return produce(state, draft => {
    const { playingArea } = draft;
    switch (action.type) {
      case ADD_CARD_TO_PLAYING_AREA:
        playingArea.cards.push(action.card);
        break;
    }
  });
}

export default playingArea;
