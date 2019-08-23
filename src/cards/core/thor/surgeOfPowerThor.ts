import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-3.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import HeroCard from '@/cards/HeroCard';
import { HeroTeam } from '@/helpers/heroTeams';

export default class SurgeOfPowerThor extends HeroCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Surge of Power',
      hero: 'Thor',
      cost: 4,
      attack: 0,
      recruit: 2,
      deckId: null,
      heroClass: HeroClass.RANGED,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 2;
  }

  action() {
    if (StackService.recruitPointsMadeThisTurn() >= 8) this.attack += 3;
    return Promise.resolve(true);
  }
}
