import { uniqueid } from '@/helpers/uid';
import artwork from '../../../../images/sentinel.jpg';
import HenchmenCard from '@/cards/HenchmenCard';
import dialogService from '@/helpers/dialog';

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
    return dialogService
      .openKO()
      .waitForClose()
      .then(result => {
        //ko some cards
        return true;
      })
      .catch(() => Promise.reject());
  }
}
