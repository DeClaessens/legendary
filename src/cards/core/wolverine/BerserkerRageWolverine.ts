import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/wolverine-1.jpg';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';

export default class BerserkerRageWolverine extends HeroCard {
  constructor() {
    super({
      name: 'Berserker Rage',
      hero: 'Wolverine',
      cost: 8,
      attack: 0,
      recruit: 0,
      deckId: null,
      heroClass: HeroClass.INSTINCT,
      heroTeam: HeroTeam.XMEN,
      imageUrl: artwork,
    });
  }

  restoreToDefaults() {
    this.attack = 0;
    this.recruit = 0;
  }

  private drawThreeCards() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  action() {
    this.drawThreeCards();

    if (StackService.findCardByHeroClass(HeroClass.INSTINCT)) {
      this.attack += StackService.countExtraCardsDrawn();
    }

    return Promise.resolve(true);
  }
}
