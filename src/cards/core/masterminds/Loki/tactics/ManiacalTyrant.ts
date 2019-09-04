import { uniqueid } from '@/helpers/uid';
import artwork from '@/images/loki-c.jpg';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';
import { KOCard } from '@/actions/gameManager';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';
import MastermindCard from '@/cards/MastermindCard';

export default class ManiacalTyrant extends MastermindCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Maniacal Tyrant',
      strength: 10,
      imageUrl: artwork,
      deckId: null,
    });
  }

  restoreToDefaults() {
    this.strength = 10;
  }

  fight() {
    // KO UP TO FOUR CARDS FROM YOUR DISCARDPILE
  }
}
