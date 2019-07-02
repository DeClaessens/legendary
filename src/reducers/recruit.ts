/* eslint-disable no-case-declarations */
import produce from 'immer';
import { ADD_RECRUIT_POINTS, DEDUCT_RECRUIT_POINTS } from '@/actions/recruit';

function recruit(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_RECRUIT_POINTS:
        draft.recruit += action.recruitPoints;
        break;
      case DEDUCT_RECRUIT_POINTS:
        draft.recruit -= action.recruitPoints;
        console.log(draft.recruit);
        break;
    }
  });
}

export default recruit;
