import BaseCard from './BaseCard';
import { uniqueid } from '@/helpers/uid';

export default class HeroCard extends BaseCard {
  cost;

  attack;

  recruit;

  heroClass;

  heroTeam;

  constructor(cardData) {
    super(cardData);
    this.cost = cardData.cost;
    this.attack = cardData.attack;
    this.recruit = cardData.recruit;
    this.heroClass = cardData.heroClass;
    this.heroTeam = cardData.heroTeam;
  }

  action() {}
}
