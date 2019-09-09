import { uniqueid } from '@/helpers/uid';
import artwork from '@/images/loki-b.jpg';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';
import { KOCard } from '@/actions/gameManager';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';
import MastermindCard from '@/cards/MastermindCard';

export default class VanishingIllusions extends MastermindCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Vanishing Illusions',
      strength: 10,
      imageUrl: artwork,
      deckId: null,
    });
  }

  restoreToDefaults() {
    this.strength = 10;
  }

  fight() {
    // EACH OTHER PLAYER KO'S A VILLAIN FROM THEIR VICTORY PILE
    return Promise.resolve(true);
  }
}
