import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/thor-1.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import HeroCard from '@/cards/HeroCard';
import { HeroTeam } from '@/helpers/heroTeams';
import { enableSpendAttackAsRecruitModifier } from '@/actions/turnModifiers';

export default class GodOfThunderThor extends HeroCard {
  constructor() {
    super({
      id: uniqueid(),
      name: 'God of Thunder',
      hero: 'Thor',
      cost: 8,
      attack: 0,
      recruit: 5,
      deckId: null,
      heroClass: HeroClass.RANGED,
      heroTeam: HeroTeam.AVENGERS,
      imageUrl: artwork,
    });
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 5;
  }

  private enableSpendAttackAsRecruitModifier() {
    store.dispatch(enableSpendAttackAsRecruitModifier());
  }

  action() {
    console.log('god action');
    this.enableSpendAttackAsRecruitModifier();
    console.log('v2');
    return Promise.resolve(true);
  }
}
