import ShieldAgent from './ShieldAgent';
import ShieldOperative from './ShieldOperative';
import GodOfThunderThor from '../core/thor/GodOfThunderThor';

export const starterDeck = () => {
  return [
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldAgent(),
    new ShieldOperative(),
    new ShieldOperative(),
    new ShieldOperative(),
    new ShieldOperative(),
  ];
};
