import { uniqueid } from '@/helpers/uid';
import artwork from '../../../../images/sentinel.jpg';

export default class Sentinel {
  id;

  name;

  strength;

  deckId;

  imageUrl;

  constructor() {
    this.id = uniqueid();
    this.name = 'Sentinel';
    this.strength = 3;
    this.deckId = null;
    this.imageUrl = artwork;
  }

  restoreToDefaults() {
    this.strength = 3;
  }

  fight() {
    // KO one of your heroes
    return Promise.resolve(true);
  }
}
