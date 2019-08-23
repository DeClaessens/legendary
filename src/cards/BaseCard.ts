import { uniqueid } from '@/helpers/uid';

export default class BaseCard {
  id;

  deckId;

  name;

  hero;

  imageUrl;

  constructor(cardData) {
    this.id = uniqueid();
    this.deckId = cardData.deckId;
    this.name = cardData.name;
    this.hero = cardData.hero;
    this.imageUrl = cardData.imageUrl;
  }

  restoreToDefaults() {}

  action() {}
}
