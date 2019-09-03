import BaseCard from './BaseCard';
import { uniqueid } from '@/helpers/uid';
import { ItemTypes } from '@/helpers/constants';
import { store } from '..';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';

export default class HenchmenCard extends BaseCard {
  strength;

  type;

  constructor(cardData) {
    super(cardData);
    this.strength = cardData.strength;
    this.type = ItemTypes.CARD_TYPES.HENCHMEN;
  }

  fight() {}

  private moveCardToCity() {
    store.dispatch(moveCardToCity(this));
    store.dispatch(addEventToStack('DREW_VILLAIN_CARD'));
  }

  whenDrawn() {
    return Promise.resolve(this.moveCardToCity());
  }
}
