import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-1.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class GodOfThunderThor {
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
    this.name = 'God Of Thunder - Thor';
    this.cost = 8;
    this.attack = 0;
    this.recruit = 5;
    this.deckId = null;
    this.heroClass = HeroClass.RANGED;
    this.imageUrl = artwork;
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 5;
  }

  action() {
    // add modifier
    return Promise.resolve(true);
  }
}
