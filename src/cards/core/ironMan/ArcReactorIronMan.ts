import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/iron-man-3.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class ArcReactorIronMan {
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
    this.name = 'Arc Reactor - Iron Man';
    this.cost = 5;
    this.attack = 3;
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
    this.attack += StackService.countCardsByHeroClass(HeroClass.TECH);
    return Promise.resolve(true);
  }
}
