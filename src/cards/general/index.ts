import ShieldAgent from './ShieldAgent';
import ShieldOperative from './ShieldOperative';

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
