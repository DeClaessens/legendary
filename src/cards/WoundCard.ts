import { uniqueid } from '@/helpers/uid';
import artwork from '@/images/wound.png';
import BaseCard from './BaseCard';
import { ItemTypes } from '@/helpers/constants';

export default class WoundCard extends BaseCard {
  type;

  constructor() {
    super({
      id: uniqueid(),
      name: 'Wound',
      imageUrl: artwork,
      deckId: null,
    });

    this.type = ItemTypes.CARD_TYPES.WOUND;
  }
}
