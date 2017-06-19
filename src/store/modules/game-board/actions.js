/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import { ADD_PLAYER, NEXT_PLAYER } from './mutation-types';

export const addPlayer = ({ commit }, payload) => commit(ADD_PLAYER, payload);
export const nextPlayer = ({ commit, getters: { currentPlayer } }) =>
  commit(NEXT_PLAYER, currentPlayer);

export default {
  addPlayer,
  nextPlayer,
};
