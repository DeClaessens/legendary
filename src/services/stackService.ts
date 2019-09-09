import { store } from '../index';

const getPlayEvents = () => {
  const { stack } = store.getState();
  return stack.filter(event => event.message === 'PLAY');
};

const getBuyEvents = () => {
  const { stack } = store.getState();
  return stack.filter(event => event.message === 'BUY');
};

const getFightEvents = () => {
  const { stack } = store.getState();
  return stack.filter(event => event.message === 'FIGHT');
};

const StackService = {
  findCardByHeroClass: heroClass => {
    console.log(getPlayEvents().find(event => event.card && event.card.heroClass === heroClass));
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
  hasBoughtCard: () => {
    return getBuyEvents().length > 0;
  },
  hasFoughtCard: () => {
    return getFightEvents().length > 0;
  },
};

export default StackService;
