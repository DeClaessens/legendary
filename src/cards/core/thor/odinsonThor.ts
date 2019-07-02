import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-4.jpg';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class OdinsonThor {
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
    this.name = 'Odinson - Thor';
    this.cost = 3;
    this.attack = 2;
    this.recruit = 0;
    this.deckId = null;
    this.heroClass = HeroClass.STRENGTH;
    this.imageUrl = artwork;
  }

  restoreToDefaults() {
    this.attack = 2;
    this.recruit = 0;
  }

  action() {
    if (StackService.findCardByHeroClass(HeroClass.STRENGTH)) this.recruit += 2;
    return Promise.resolve(true);
  }
}
