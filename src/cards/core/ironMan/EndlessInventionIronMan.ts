import { uniqueid } from '@/helpers/uid';
import endlessInventionIronManArt from '../../../images/ironman-1.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';

export default class EndlessInventionIronMan {
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
    this.name = 'Endless Invention - Iron Man';
    this.cost = 3;
    this.attack = 0;
    this.recruit = 0;
    this.deckId = null;
    this.heroClass = HeroClass.TECH;
    this.imageUrl = endlessInventionIronManArt;
  }

  private drawCard() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  action() {
    this.drawCard();
    if (StackService.findCardByHeroClass(HeroClass.TECH)) this.drawCard();
    return Promise.resolve(true);
  }
}
