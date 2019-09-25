import { uniqueid } from '@/helpers/uid';
import artwork from '../../../images/wolverine-3.jpg';
import { drawCardFromPlayerDeck, KOCard } from '@/actions/gameManager';
import { store } from '../../../index';
import StackService from '@/services/stackService';
import { HeroClass } from '@/helpers/heroClasses';
import { HeroTeam } from '@/helpers/heroTeams';
import HeroCard from '@/cards/HeroCard';
import dialogService from '@/helpers/dialog';
import { ItemTypes } from '@/helpers/constants';

export default class HealingFactorWolverine extends HeroCard {
  constructor() {
    super({
      name: 'Healing Factor',
      hero: 'Wolverine',
      cost: 3,
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

  private KOCard(card, from) {
    store.dispatch(KOCard(card, from));
  }

  private DrawCard() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
  }

  action() {
    return dialogService
      .openKOFromDiscardPileOrHand(1, ItemTypes.CARD_TYPES.WOUND)
      .waitForClose()
      .then(({ cards }) => {
        if (cards.length > 0) {
          cards.forEach(card => {
            this.KOCard(card, card.from);
          });
          this.DrawCard();
        }
      });
  }
}
