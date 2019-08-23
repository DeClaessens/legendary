import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-2.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import HeroCard from '@/cards/HeroCard';
import { HeroTeam } from '@/helpers/heroTeams';

export default class CallLightningThor extends HeroCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Call Lightning',
      hero: 'Thor',
      cost: 6,
      attack: 3,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.RANGED,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
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
