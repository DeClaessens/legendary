import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/wolverine-2.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';

export default class FrenziedSlashingWolverine extends HeroCard {
  constructor() {
    super({
      name: 'Frenzied Slashing',
      hero: 'Wolverine',
      cost: 5,
      attack: 2,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.INSTINCT,
      heroTeam: HeroTeam.XMEN,
      imageUrl: artwork,
    });
  }

  restoreToDefaults() {
    this.attack = 2;
    this.recruit = 0;
  }

  private drawTwoCards() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  action() {
    if (StackService.findCardByHeroClass(HeroClass.INSTINCT)) this.drawTwoCards();
    return Promise.resolve(true);
  }
}
