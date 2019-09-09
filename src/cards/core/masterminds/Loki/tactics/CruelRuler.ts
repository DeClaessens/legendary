import { uniqueid } from '@/helpers/uid';
import { store } from '../../../../../index';
import artwork from '@/images/loki-d.jpg';
import MastermindCard from '@/cards/MastermindCard';
import dialogService from '@/helpers/dialog';
import { defeatCardFromCity } from '@/actions/gameManager';

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

  private defeatVillain(card) {
    store.dispatch(defeatCardFromCity(card));
  }

  fight() {
    // DEFEAT A VILLAIN IN THE CITY FOR FREE
    return dialogService
      .openDefeatCityVillain()
      .waitForClose()
      .then(({ card }) => {
        return this.defeatVillain(card);
      })
      .catch(() => Promise.resolve());
  }
}
