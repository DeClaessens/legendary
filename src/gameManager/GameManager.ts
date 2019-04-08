import { Deck } from '@/deck/Deck';
import Stack from '@/stack/Stack';

class GameManager {
  deck: Deck;
  stack: Stack;
  constructor(deck: Deck, stack: Stack) {
    this.deck = deck;
    this.stack = stack;
  }
}
