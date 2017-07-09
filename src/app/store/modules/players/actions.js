/* ============
 * Actions for the players module
 * ============
 */

import {
  ADD_PLAYER,
  NEXT_PLAYER,
  MOVE_PLAYER,
  GIVE_MONEY,
  TAKE_MONEY,
  SET_REVERSE,
  SET_DOUBLE,
  MINUS_SECOND,
  RESET_TIMEOUT,
  SET_STATE,
} from './mutation-types';

import { runTimer, stopTimer } from '@/utils/timer';

export const addPlayer = ({ commit }, payload) => commit(ADD_PLAYER, payload);

export const nextPlayer = ({ commit, getters: { currentPlayer } }) => {
  commit(NEXT_PLAYER, currentPlayer);
  commit(SET_STATE, {id: currentPlayer.id, state: 1});
};

export const movePlayer = ({ commit, getters: { currentPlayer }, rootGetters }, totalDices) => {
  const cardsLength = rootGetters['gameboard/cardsLength'];
  const preparedPostion = currentPlayer.position + totalDices;
  const isNewLap = preparedPostion + 1 > cardsLength;
  const newPosition = isNewLap ? (preparedPostion - cardsLength) : preparedPostion;
  // debugger;
  commit(MOVE_PLAYER, { id: currentPlayer.id, newPosition });
  if (isNewLap) {
    commit(GIVE_MONEY, { id: currentPlayer.id, value: 400 });
  }
  commit(SET_DOUBLE, { id: currentPlayer.id, value: false });
};

export const takeMoney = ({ commit }, { id, value }) => {
  commit(TAKE_MONEY, { id, value });
};

export const giveMoney = ({ commit }, { id, value }) => {
  commit(GIVE_MONEY, { id, value });
};

export const setReverse = ({ commit }, { id }) => {
  commit(SET_REVERSE, { id, value: true });
};

export const removeReverse = ({ commit }, { id }) => {
  commit(SET_REVERSE, { id, value: true });
};

export const setDouble = ({ commit }, { id }) => {
  commit(SET_DOUBLE, { id, value: true });
};

export const removeDouble = ({ commit }, { id }) => {
  commit(SET_DOUBLE, { id, value: true });
};

export const minusSecond = ({ commit, getters }, id) => {
  if (getters.currentPlayer.timeout === 0) {
    commit(NEXT_PLAYER, getters.currentPlayer);
    runTimer(getters.currentPlayer.id);
   // stopTimer(id);
  } else {
    commit(MINUS_SECOND, id);
  }
};

export const resetTimeout = ({ commit }, id) => {
  commit(RESET_TIMEOUT, id);
};

export const setState = ({ commit }, state) => {
  commit(SET_STATE, state);
};

export const setPlayerPosition = ({ commit, getters: { currentPlayer } }, newPosition) => {
  commit(MOVE_PLAYER, { id: currentPlayer.id, newPosition });
  commit(SET_DOUBLE, { id: currentPlayer.id, value: false });
};


export default {
  addPlayer,
  nextPlayer,
  movePlayer,
  takeMoney,
  giveMoney,
  setReverse,
  removeReverse,
  setDouble,
  removeDouble,
  minusSecond,
  resetTimeout,
  setState,
  setPlayerPosition,
};
