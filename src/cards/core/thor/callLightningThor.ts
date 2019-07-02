import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-2.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class CallLightningThor {
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
    this.name = 'Call Lightning - Thor';
    this.cost = 6;
    this.attack = 3;
    this.recruit = 0;
    this.deckId = null;
    this.heroClass = HeroClass.RANGED;
    this.imageUrl = artwork;
  }

  restoreToDefaults() {
    this.attack = 3;
    this.recruit = 0;
  }

  action() {
    if (StackService.findCardByHeroClass(HeroClass.RANGED)) this.attack += 3;
    return Promise.resolve(true);
  }
}
