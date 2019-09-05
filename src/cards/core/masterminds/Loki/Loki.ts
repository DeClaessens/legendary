import { uniqueid } from '@/helpers/uid';
import { store } from '../../../../index';
import artwork from '../../../../images/loki-mastermind.jpg';
import dialogService from '@/helpers/dialog';
import { gainWound } from '@/actions/gameManager';
import MastermindCard from '@/cards/MastermindCard';
import { HeroClass } from '@/helpers/heroClasses';

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

  private gainWound() {
    store.dispatch(gainWound());
  }

  onMasterStrike() {
    return dialogService
      .openReveal()
      .waitForClose()
      .then(({ card }) => {
        if (card.heroClass === HeroClass.STRENGTH) return true;

        return this.gainWound();
      })
      .catch(() => this.gainWound());
  }
}
