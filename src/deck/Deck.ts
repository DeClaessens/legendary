import ShieldAgent from '../cards/general/ShieldAgent';
import ShieldOperative from '../cards/general/ShieldOperative';

export class Deck {
  cards: Array<any>;

  constructor() {
    this.cards = [];
  }

  initializePlayerDeck() {
    this.cards.push(new ShieldAgent());
    this.cards.push(new ShieldAgent());
    this.cards.push(new ShieldAgent());
    this.cards.push(new ShieldAgent());
    this.cards.push(new ShieldOperative());
    this.cards.push(new ShieldOperative());
    this.cards.push(new ShieldOperative());
    this.cards.push(new ShieldOperative());

    this.shuffle();
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue: any;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;
  }
}
