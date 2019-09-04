import { store } from '../index';
import { ItemTypes } from '@/helpers/constants';

const getWounds = () => {
  const { hand } = store.getState();
  return hand.filter(card => card.type === ItemTypes.CARD_TYPES.WOUND);
};

const HandService = {
  hasWounds: () => {
    return getWounds().length > 0;
  },
};

export default HandService;
