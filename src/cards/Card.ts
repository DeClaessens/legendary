class Card {
  name: string;
  cost: number;
  recruit: number;
  fight: number;

  constructor(name = '', cost = 0, recruit = 0, fight = 0) {
    this.name = name;
    this.cost = cost;
    this.recruit = recruit;
    this.fight = fight;
  }

  play() {
    return Promise.resolve({
      message: `Played ${this.name}`,
      card: this,
    });
  }
}

export default Card;
