import ShieldAgent from './ShieldAgent';
import ShieldOperative from './ShieldOperative';
import WoundCard from '../WoundCard';

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
