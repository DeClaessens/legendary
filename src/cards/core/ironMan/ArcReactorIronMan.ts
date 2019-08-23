import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/iron-man-3.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';

export default class ArcReactorIronMan extends HeroCard {
  constructor() {
    super({
      name: 'Arc Reactor',
      hero: 'Iron Man',
      cost: 5,
      attack: 3,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.TECH,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
  }

  restoreToDefaults() {
    this.attack = 3;
    this.recruit = 0;
  }

  action() {
    this.attack += StackService.countCardsByHeroClass(HeroClass.TECH);
    return Promise.resolve(true);
  }
}
