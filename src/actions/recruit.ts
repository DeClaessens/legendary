/*
 * action types
 */
export const ADD_RECRUIT_POINTS = 'ADD_RECRUIT_POINTS';
export const DEDUCT_RECRUIT_POINTS = 'DEDUCT_RECRUIT_POINTS';

/*
 * action creators
 */

export function addRecruitPoints(recruitPoints) {
  return { type: ADD_RECRUIT_POINTS, recruitPoints };
}

export function deductRecruitPoints(recruitPoints) {
  return { type: DEDUCT_RECRUIT_POINTS, recruitPoints };
}
