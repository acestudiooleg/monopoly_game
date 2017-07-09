/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */
import { ADD_MESSAGE, messageType } from './mutation-types';

const {
  PLAYER_THREW,
  PLAYER_STEP,
  PLAYER_MOVE,
  HAT,
  TAX,
  BONUS,
  REVERSE,
  TAKE_MONEY,
  GIVE_MONEY,
  BUY_FIRM,
} = messageType;

export const playerThrew = ({ commit, rootGetters }, dices) => {
  const player = rootGetters['players/currentPlayer'];
  commit(ADD_MESSAGE, {
    type: PLAYER_THREW,
    data: { player, dices },
  });
};

export const nextPlayerStep = ({ commit, rootGetters }) => {
  const player = rootGetters['players/currentPlayer'];
  commit(ADD_MESSAGE, {
    type: PLAYER_STEP,
    data: { player },
  });
};

export const playerMove = ({ commit, rootGetters }) => {
  const player = rootGetters['players/currentPlayer'];
  const card = rootGetters['gameboard/currentCard'];
  commit(ADD_MESSAGE, {
    type: PLAYER_MOVE,
    data: { player, card },
  });
};
export const hat = ({ commit, rootGetters, rootState }, placeId) => {
  const card = rootState.gameboard.getCard(placeId);
  const player = rootGetters['players/currentPlayer'];
  commit(ADD_MESSAGE, {
    type: HAT,
    data: { player, card },
  });
};
export const tax = ({ commit, rootGetters }, value) => {
  const player = rootGetters['players/currentPlayer'];
  commit(ADD_MESSAGE, {
    type: TAX,
    data: { value, player },
  });
};
export const bonus = ({ commit, rootGetters }, value) => {
  const player = rootGetters['players/currentPlayer'];
  commit(ADD_MESSAGE, {
    type: BONUS,
    data: { value, player },
  });
};
export const reverse = ({ commit }) => {
  commit(ADD_MESSAGE, {
    type: REVERSE,
    data: {},
  });
};

export const takeMoney = ({ commit, rootState }, { id, value }) => {
  const player = rootState.players.getPlayer(id);
  commit(ADD_MESSAGE, {
    type: TAKE_MONEY,
    data: { player, value },
  });
};

export const giveMoney = ({ commit, rootState }, { id, value }) => {
  const player = rootState.players.getPlayer(id);
  commit(ADD_MESSAGE, {
    type: GIVE_MONEY,
    data: { player, value },
  });
};

export const buyFirm = ({ commit, rootState }, { id, playerId }) => {
  const player = rootState.players.getPlayer(playerId);
  const card = rootState.gameboard.getCard(id);
  commit(ADD_MESSAGE, {
    type: BUY_FIRM,
    data: { player, card },
  });
};

export default {
  playerThrew,
  nextPlayerStep,
  playerMove,
  hat,
  tax,
  bonus,
  reverse,
  takeMoney,
  giveMoney,
  buyFirm,
};
