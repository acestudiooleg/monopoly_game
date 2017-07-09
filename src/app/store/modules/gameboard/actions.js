/* ============
 * Actions for the gameboard module
 * ============
 */

import * as types from './mutation-types';
import store from '@/store';

export const buyFirm = ({ commit, getters }, { id, playerId }) => {
  commit(types.BUY_FIRM, { id, playerId });
  store.dispatch('players/takeMoney', {
    id: playerId,
    value: getters.currentCard.price
  });
};

export default {
  buyFirm,
};
