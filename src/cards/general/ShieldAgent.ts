import Card from '../Card';

class ShieldAgent extends Card {
  constructor() {
    const props = {
      name: 'Shield Agent',
      cost: 0,
      recruit: 1,
      fight: 0,
    };
    super(props.name, props.cost, props.recruit, props.fight);
  }
}

export default ShieldAgent;
