import { uniqueid } from '@/helpers/uid';
import { store } from '../../../../index';
import artwork from '../../../../images/loki-mastermind.jpg';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';
import { KOCard } from '@/actions/gameManager';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';
import MastermindCard from '@/cards/MastermindCard';

export default class Loki extends MastermindCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Loki',
      strength: 10,
      imageUrl: artwork,
      deckId: null,
    });
  }

  restoreToDefaults() {
    this.strength = 10;
  }

  onMasterStrike() {
    //reveal a green card or gain a wound
  }
}
