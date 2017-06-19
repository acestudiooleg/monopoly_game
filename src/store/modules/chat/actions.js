/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */
import { ADD_MESSAGE, messageType } from './mutation-types';

const { PLAYER_THREW, PLAYER_STEP, PLAYER_MOVE } = messageType;

export const playerThrew = ({ commit }, { currentPlayer, dices }) => {
  commit(ADD_MESSAGE, {
    type: PLAYER_THREW,
    data: { currentPlayer, dices },
  });
};

export const nextPlayerStep = ({ commit }, currentPlayer) => {
  commit(ADD_MESSAGE, {
    type: PLAYER_STEP,
    data: { currentPlayer },
  });
};

export const playerMove = ({ commit }, { currentPlayer, boardPosition }) => {
  commit(ADD_MESSAGE, {
    type: PLAYER_MOVE,
    data: { currentPlayer, boardPosition },
  });
};

export default {
  playerThrew,
  nextPlayerStep,
  playerMove,
};
