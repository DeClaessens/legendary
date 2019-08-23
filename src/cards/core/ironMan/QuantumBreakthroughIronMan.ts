import { uniqueid } from '@/helpers/uid';
import { store } from '../../../index';
import artwork from '../../../images/iron-man-4.jpg';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import HeroCard from '@/cards/HeroCard';
import { HeroTeam } from '@/helpers/heroTeams';

export default class QuantumBreakthroughIronMan extends HeroCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Quantum Breakthrough',
      hero: 'Iron Man',
      cost: 7,
      attack: 0,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.TECH,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
  }

  private drawCard() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 0;
  }

  action() {
    this.drawCard();
    this.drawCard();
    if (StackService.findCardByHeroClass(HeroClass.TECH)) {
      this.drawCard();
      this.drawCard();
    }

    return Promise.resolve(true);
  }
}
