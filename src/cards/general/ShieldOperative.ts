import Card from '../Card';

class ShieldOperative extends Card {
  constructor() {
    const props = {
      name: 'Shield Operative',
      cost: 0,
      recruit: 0,
      fight: 1,
    };
    super(props.name, props.cost, props.recruit, props.fight);
  }
}

export default ShieldOperative;
