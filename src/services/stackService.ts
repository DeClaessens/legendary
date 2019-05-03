import { store } from '../index';

const StackService = {
  findCardByHeroClass: heroClass => {
    const { stack } = store.getState();
    return stack.find(messages => messages.card.heroClass === heroClass);
  },
};

export default StackService;
