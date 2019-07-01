import { uniqueid } from '@/helpers/uid';
import shieldOperativeArt from '../../images/shieldOperative.png';
import { HeroClass } from '@/helpers/heroClasses';

export default class shieldOperative {
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
    this.name = 'Shield Operative';
    this.cost = 0;
    this.attack = 1;
    this.recruit = 0;
    this.deckId = null;
    this.heroClass = HeroClass.BASIC;
    this.imageUrl = shieldOperativeArt;
  }

  action() {
    return Promise.resolve(true);
  }
}
