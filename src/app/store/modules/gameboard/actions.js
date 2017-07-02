/* ============
 * Actions for the gameboard module
 * ============
 */

import * as types from './mutation-types';

export const store = ({ commit }, payload) => {
  commit(types.STORE, payload);
};

export default {
  store,
};
