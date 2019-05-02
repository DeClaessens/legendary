import { uniqueid } from '@/helpers/uid';
import shieldOperative from '../../images/shieldOperative.png';

export default () => ({
  id: uniqueid(),
  name: 'Shield Operative',
  cost: 0,
  attack: 1,
  recruit: 0,
  action: undefined,
  imageUrl: shieldOperative,
});
