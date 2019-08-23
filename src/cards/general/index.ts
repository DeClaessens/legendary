import ShieldAgent from './ShieldAgent';
import ShieldOperative from './ShieldOperative';
import ArcReactorIronMan from '../core/ironMan/ArcReactorIronMan';
import EndlessInventionIronMan from '../core/ironMan/EndlessInventionIronMan';
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
    new GodOfThunderThor(),
    new GodOfThunderThor(),
    new GodOfThunderThor(),
    new GodOfThunderThor(),
  ];
};
