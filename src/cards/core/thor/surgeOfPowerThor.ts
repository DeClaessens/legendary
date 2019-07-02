import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-3.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class SurgeOfPowerThor {
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
    this.name = 'Surge of Power - Thor';
    this.cost = 4;
    this.attack = 0;
    this.recruit = 2;
    this.deckId = null;
    this.heroClass = HeroClass.RANGED;
    this.imageUrl = artwork;
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 2;
  }

  action() {
    if (StackService.recruitPointsMadeThisTurn() >= 8) this.attack += 3;
    return Promise.resolve(true);
  }
}
