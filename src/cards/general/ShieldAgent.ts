import { uniqueid } from '@/helpers/uid';
import shieldAgent from '../../images/shieldAgent.jpg';

export default () => ({
  id: uniqueid(),
  name: 'Shield Agent',
  cost: 0,
  attack: 0,
  recruit: 1,
  action: 'undefined',
  imageUrl: shieldAgent,
});
