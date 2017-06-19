/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
import { findIndex } from 'lodash/fp';

const nextPlayerIndex = (array, el) => {
  const i = findIndex({ id: el.id })(array);
  if ((i + 1) < array.length) {
    return i + 1;
  }
  return 0;
};

import {
  ADD_PLAYER,
 // REMOVE_PLAYER,
 // EDIT_PLAYER,
 NEXT_PLAYER,
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
  [NEXT_PLAYER](state, currentPlayer) {
    const { list } = state;


    const newPlayerIndex = nextPlayerIndex(list, currentPlayer);
    state.list = list.map(el => ({ ...el, isActive: false }));
    state.list[newPlayerIndex].isActive = true;
  },
};
