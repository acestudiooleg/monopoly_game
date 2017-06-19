/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import { ADD_PLAYER, NEXT_PLAYER, PLAYER_MOVE } from './mutation-types';

export const addPlayer = ({ commit }, payload) => commit(ADD_PLAYER, payload);
export const nextPlayer = ({ commit, getters: { currentPlayer } }) =>
  commit(NEXT_PLAYER, currentPlayer);
export const playerMove = (store, payload) => {
  const { commit, rootState: { gameBoard } } = store;
  const { currentPlayer, dices: { total } } = payload;
  const gameBoardLength = gameBoard.list.length;
  console.log(currentPlayer.position, total, (currentPlayer.position + total) % gameBoardLength);
  const newPosition = (currentPlayer.position + total) % gameBoardLength || gameBoardLength;
  commit(PLAYER_MOVE, { currentPlayer, newPosition });
};

export default {
  addPlayer,
  nextPlayer,
  playerMove,
};
