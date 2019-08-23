import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/iron-man-2.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import HeroCard from '@/cards/HeroCard';
import { HeroTeam } from '@/helpers/heroTeams';

export default class RepulsorRaysIronMan extends HeroCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Repulsor Rays',
      hero: 'Iron Man',
      cost: 3,
      attack: 2,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.RANGED,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
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
