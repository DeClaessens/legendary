/*
 * action types
 */
export const ADD_RECRUIT_POINTS = 'ADD_RECRUIT_POINTS';

/*
 * action creators
 */

export function addRecruitPoints(recruitPoints) {
  return { type: ADD_RECRUIT_POINTS, recruitPoints };
}
