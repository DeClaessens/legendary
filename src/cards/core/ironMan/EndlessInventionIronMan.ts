import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/iron-man-1.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';

export default class EndlessInventionIronMan extends HeroCard {
  constructor() {
    super({
      name: 'Endless Invention',
      hero: 'Iron Man',
      cost: 3,
      attack: 0,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.TECH,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
  }

  private drawCard() {
    console.log(this);
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 0;
  }

  action() {
    this.drawCard();
    if (StackService.findCardByHeroClass(HeroClass.TECH)) this.drawCard();
    return Promise.resolve(true);
  }
}
