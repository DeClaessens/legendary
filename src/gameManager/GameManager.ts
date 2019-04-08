import { Deck } from '@/deck/Deck';
import Stack from '@/stack/Stack';
import Card from '@/cards/Card';
import Hand from '@/Hand/Hand';

class GameManager {
  deck: Deck;
  stack: Stack;
  hand: Hand;
  constructor() {
    this.deck = new Deck();
    this.stack = new Stack();
    this.hand = new Hand();
  }

  init() {
    if (this.deck.cards.length === 0) {
      this.deck.initializePlayerDeck();
    }
  }

  drawToHand(): Promise<Hand> {
    return this.deck.draw().then(card => {
      this.stack.add({
        message: `Drew ${card.name} to hand`,
        card,
      });
      return this.hand.add(card);
    });
  }

  playCardFromHand(card: Card): Promise<any> {
    return card.play().then(msg => {
      this.stack.add(msg);
    });
  }
}

export default GameManager;
