import { uniqueid } from '@/helpers/uid';
import artwork from '../../../../images/sentinel.jpg';
import HenchmenCard from '@/cards/HenchmenCard';

export default class Sentinel extends HenchmenCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Sentinel',
      strength: 3,
      imageUrl: artwork,
      deckId: null,
    });
  }

  restoreToDefaults() {
    this.strength = 3;
  }

  fight() {
    // KO one of your heroes
    return Promise.resolve(true);
  }
}
