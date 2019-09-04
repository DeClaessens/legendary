import { uniqueid } from '@/helpers/uid';
import artwork from '@/images/loki-d.jpg';
import MastermindCard from '@/cards/MastermindCard';

export default class CruelRuler extends MastermindCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Cruel Ruler',
      strength: 10,
      imageUrl: artwork,
      deckId: null,
    });
  }

  restoreToDefaults() {
    this.strength = 10;
  }

  fight() {
    // DEFEAT A VILLAIN IN THE CITY FOR FREE
  }
}
