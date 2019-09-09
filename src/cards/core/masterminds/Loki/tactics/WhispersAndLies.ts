import { uniqueid } from '@/helpers/uid';
import { store } from '../../../../../index';
import artwork from '@/images/loki-a.jpg';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';
import { KOCard } from '@/actions/gameManager';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';
import MastermindCard from '@/cards/MastermindCard';
import { ItemTypes } from '@/helpers/constants';

export default class WhispersAndLies extends MastermindCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Whispers And Lies',
      strength: 10,
      imageUrl: artwork,
      deckId: null,
    });
  }

  restoreToDefaults() {
    this.strength = 10;
  }

  private KOCard(card, from) {
    store.dispatch(KOCard(card, from));
  }

  async fight() {
    try {
      await dialogService
        .openKOFromDiscardPile(2, ItemTypes.CARD_TYPES.BYSTANDER, true)
        .waitForClose()
        .then(({ cards, from }) => {
          cards.forEach(card => this.KOCard(card, from));
          return true;
        });
    } catch (e) {
      // not allowed to cancel
      this.fight();
    }
  }
}
