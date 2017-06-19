/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
import { findIndex, map, find } from 'lodash/fp';

const nextPlayerIndex = (array, el) => {
  const i = findIndex({ id: el.id })(array);
  if ((i + 1) < array.length) {
    return i + 1;
  }
  return 0;
};

const clearPlayersActiveStatus = map(el => ({ ...el, isActive: false }));

import {
  ADD_PLAYER,
 // REMOVE_PLAYER,
 // EDIT_PLAYER,
 NEXT_PLAYER,
 PLAYER_MOVE,
 // SET_PLAYER_POSITION,
 // ADD_PLAYER_PROPERTY,
 // REMOVE_PLAYER_PROPERTY,
 // REMOVE_PLAYER_PROPERTY,
} from './mutation-types';


export default {
  [ADD_PLAYER](state, player) {
    state.list.push({
      id: state.list.length + 1,
      ...player,
    });
  },
  [PLAYER_MOVE](state, { currentPlayer: { id }, newPosition }) {
    const { list } = state;
    const player = find({ id })(list);
    player.position = newPosition;
  },
  [NEXT_PLAYER](state, currentPlayer) {
    const { list } = state;


    const newPlayerIndex = nextPlayerIndex(list, currentPlayer);
    state.list = clearPlayersActiveStatus(list);
    state.list[newPlayerIndex].isActive = true;
  },
};
