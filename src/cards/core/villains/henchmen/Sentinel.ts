import { uniqueid } from '@/helpers/uid';
import { store } from '../../../../index';
import artwork from '../../../../images/sentinel.jpg';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';
import { KOCard } from '@/actions/gameManager';
import { moveCardToCity } from '@/actions/city';
import { addEventToStack } from '@/actions/stack';

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

  private KOCard(card, from) {
    store.dispatch(KOCard(card, from));
  }

  fight() {
    return dialogService
      .openKO()
      .waitForClose()
      .then(({ card, from }) => {
        return this.KOCard(card, from);
      })
      .catch(() => Promise.reject());
  }
}
