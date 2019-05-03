import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/iron-man-2.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class RepulsorRaysIronMan {
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
    this.name = 'Repulsor Rays - Iron Man';
    this.cost = 3;
    this.attack = 2;
    this.recruit = 0;
    this.deckId = null;
    this.heroClass = HeroClass.RANGED;
    this.imageUrl = artwork;
  }

  restoreToDefaults() {
    this.attack = 2;
    this.recruit = 0;
  }

  action() {
    if (StackService.findCardByHeroClass(HeroClass.RANGED)) this.attack += 1;
    return Promise.resolve(true);
  }
}
