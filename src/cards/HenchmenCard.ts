import BaseCard from './BaseCard';
import { uniqueid } from '@/helpers/uid';
import { ItemTypes } from '@/helpers/constants';

export default class HenchmenCard extends BaseCard {
  strength;

  type;

  constructor(cardData) {
    super(cardData);
    this.strength = cardData.strength;
    this.type = ItemTypes.CARD_TYPES.HENCHMEN;
  }

  action() {}
}
