import BaseCard from './BaseCard';
import { uniqueid } from '@/helpers/uid';
import { ItemTypes } from '@/helpers/constants';

export default class HeroCard extends BaseCard {
  type;

  hero;

  cost;

  attack;

  recruit;

  heroClass;

  heroTeam;

  constructor(cardData) {
    super(cardData);
    this.type = ItemTypes.CARD_TYPES.HERO;
    this.hero = cardData.hero;
    this.cost = cardData.cost;
    this.attack = cardData.attack;
    this.recruit = cardData.recruit;
    this.heroClass = cardData.heroClass;
    this.heroTeam = cardData.heroTeam;
  }

  play() {}
}
