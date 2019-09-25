import ShieldAgent from './ShieldAgent';
import ShieldOperative from './ShieldOperative';
import GodOfThunderThor from '../core/thor/GodOfThunderThor';
import BerserkerRageWolverine from '../core/wolverine/BerserkerRageWolverine';

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
