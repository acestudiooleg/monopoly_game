/* ============
 * Mutations for the players module
 * ============
 */

import { findIndex, map, find } from 'lodash/fp';
import { creaceMethodChangeItemInList } from '@/utils/pureMutation';

const nextPlayerIndex = (array, id) => {
  const i = findIndex({ id })(array);
  if ((i + 1) < array.length) {
    return i + 1;
  }
  return 0;
};

const changeItemInList = creaceMethodChangeItemInList();

const clearPlayersActiveStatus = map(el => ({...el, isActive: false }));

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

export default [
  [ADD_PLAYER, (state, player) => {
    state.list.push({
      id: state.list.length + 1,
      ...player,
    });
  }],
  [NEXT_PLAYER, (state, player) => {
    const newPlayerIndex = nextPlayerIndex(state.list, player.id);
    state.list = clearPlayersActiveStatus(state.list);
    state.list[newPlayerIndex].isActive = true;
  }],
  [SET_STATE, changeItemInList((_, { state }) => ({ state }))],
  [MOVE_PLAYER, changeItemInList((_, { newPosition }) => ({ position: newPosition, state: 2 }))],
  [GIVE_MONEY, changeItemInList(({ wallet }, { value }) => ({ wallet: (wallet + value) }))],
  [TAKE_MONEY, changeItemInList(({ wallet }, { value }) => ({ wallet: (wallet - value) }))],
  [SET_REVERSE, changeItemInList((_, { value: isReverse }) => ({ isReverse }))],
  [SET_DOUBLE, changeItemInList((_, { value: isDouble }) => ({ isDouble }))],
  [MINUS_SECOND, changeItemInList(({ timeout: t }) =>
    ({ timeout: t - 1, timePercent: (t * 100) / 60 }))],
  [RESET_TIMEOUT, changeItemInList(() => ({ timeout: 60, timePercent: 100 }))],
];
