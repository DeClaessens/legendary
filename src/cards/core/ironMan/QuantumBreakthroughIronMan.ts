import { uniqueid } from '@/helpers/uid';
import { store } from '../../../index';
import artwork from '../../../images/iron-man-4.jpg';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';

export default class QuantumBreakthroughIronMan {
  id;

  name;

  cost;

  attack;

  recruit;

  deckId;

  heroClass;

  imageUrl;

  constructor() {
    this.id = uniqueid();
    this.name = 'Quantum Breakthrough - Iron Man';
    this.cost = 7;
    this.attack = 0;
    this.recruit = 0;
    this.deckId = null;
    this.heroClass = HeroClass.TECH;
    this.imageUrl = artwork;
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
