import BaseCard from './BaseCard';
import { uniqueid } from '@/helpers/uid';
import { ItemTypes } from '@/helpers/constants';

export default class MastermindCard extends BaseCard {
  type;

  cost;

  strength;

  constructor(cardData) {
    super(cardData);
    this.type = ItemTypes.CARD_TYPES.MASTERMIND;
    this.strength = cardData.strength;
  }

  fight() {}

  onMasterStrike() {}
}
