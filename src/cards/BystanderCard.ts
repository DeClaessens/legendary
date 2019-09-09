import { uniqueid } from '@/helpers/uid';
import artwork from '@/images/master-strike.png';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';
import { KOCard } from '@/actions/gameManager';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';
import BaseCard from './BaseCard';
import { store } from '..';
import { ItemTypes } from '@/helpers/constants';

export default class BystanderCard extends BaseCard {
  type;
  constructor() {
    super({
      id: uniqueid(),
      name: 'Bystander',
      imageUrl: artwork,
      deckId: null,
    });

    this.type = ItemTypes.CARD_TYPES.BYSTANDER;
  }
}
