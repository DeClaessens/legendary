import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-4.jpg';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';

export default class OdinsonThor extends HeroCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'Odinson',
      hero: 'Thor',
      cost: 3,
      attack: 0,
      recruit: 2,
      deckId: null,
      heroClass: HeroClass.STRENGTH,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
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
