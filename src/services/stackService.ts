import { store } from '../index';

const StackService = {
  findCardByHeroClass: heroClass => {
    const { stack } = store.getState();
    return stack.find(event => event.card.heroClass === heroClass);
  },
  countCardsByHeroClass: heroClass => {
    const { stack } = store.getState();
    return stack.reduce((count, event) => {
      if (event.card.heroClass === heroClass) count += 1;

      return count;
    }, 0);
  },
};

export default StackService;
