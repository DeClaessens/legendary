import { store } from '../index';

const getPlayEvents = () => {
  const { stack } = store.getState();
  return stack.filter(event => event.message === 'PLAY');
};

const StackService = {
  findCardByHeroClass: heroClass => {
    return getPlayEvents().find(event => event.card && event.card.heroClass === heroClass);
  },
  countCardsByHeroClass: heroClass => {
    return getPlayEvents().reduce((count, event) => {
      if (event.card && event.card.heroClass === heroClass) count += 1;

      return count;
    }, 0);
  },
  recruitPointsMadeThisTurn: () => {
    const { turnStatistics } = store.getState();
    return turnStatistics.recruitEarned;
  },
};

export default StackService;
