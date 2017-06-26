/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

// import * as types from './mutation-types';
// import store from '../../index';
import makeNSDisp from '@/utils/makeDispatcher';

const chat = makeNSDisp('chat', ['playerThrew', 'playerMove', 'nextPlayerStep']);
const players = makeNSDisp('players', ['nextPlayer', 'playerMove']);

export const playerThrew = (state, dices) => {
  const {rootGetters: { currentPlayer, boardPositionByCurrentPlayer: boardPosition } } = state;
  const payload = { currentPlayer, dices };
  chat.playerThrew(payload);
  players.playerMove(payload);

  chat.playerMove({ currentPlayer, boardPosition });

  players.nextPlayer();

  chat.nextPlayerStep(currentPlayer);
};

export default {
  playerThrew,
};
