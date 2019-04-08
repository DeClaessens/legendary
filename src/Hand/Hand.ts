import Card from '@/cards/Card';

class Hand {
  cards: Array<Card>;

  constructor(cards = []) {
    this.cards = cards;
  }

  add(card: Card): Promise<Hand> {
    this.cards.push(card);
    return Promise.resolve(this);
  }
}

export default Hand;
