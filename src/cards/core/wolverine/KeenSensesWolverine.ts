import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/wolverine-4.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';

export default class KeenSensesWolverine extends HeroCard {
  constructor() {
    super({
      name: 'Keen Senses',
      hero: 'Wolverine',
      cost: 2,
      attack: 1,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.INSTINCT,
      heroTeam: HeroTeam.XMEN,
      imageUrl: artwork,
    });
  }

  restoreToDefaults() {
    this.attack = 1;
    this.recruit = 0;
  }

  private drawCard() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  action() {
    if (StackService.findCardByHeroClass(HeroClass.INSTINCT)) this.drawCard();
    return Promise.resolve(true);
  }
}
