import { uniqueid } from '@/helpers/uid';

export default class BaseCard {
  id;

  deckId;

  name;

  imageUrl;

  constructor(cardData) {
    this.id = uniqueid();
    this.deckId = cardData.deckId;
    this.name = cardData.name;
    this.imageUrl = cardData.imageUrl;
  }

  restoreToDefaults() {}
}
