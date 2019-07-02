/* eslint-disable no-case-declarations */
import produce from 'immer';
import { UPDATE_TURN_STATISTICS, RESET_TURN_STATISTICS } from '@/actions/turnStatistics';

function stack(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case RESET_TURN_STATISTICS:
        draft.turnStatistics.attackEarned = 0;
        draft.turnStatistics.recruitEarned = 0;
        break;
      case UPDATE_TURN_STATISTICS:
        draft.turnStatistics.attackEarned += action.attack;
        draft.turnStatistics.recruitEarned += action.recruit;
        break;
    }
  });
}

export default stack;
