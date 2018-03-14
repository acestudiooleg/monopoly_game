/* ============
 * Actions for the game module
 * ============
 */

import * as types from './mutation-types';
import store from '@/store';
import { runTimer } from '@/utils/timer';
import { random, rollDice } from '@/utils/dice';
import { stepTime } from '@/config';

const bot = {
  delay(cb) {
    setTimeout(cb, 1500);
  },
  throwDices() {
    this.delay(() => store.dispatch('game/playerThrewDices', rollDice()));
  },
  buy() {
    this.delay(() => store.dispatch('game/buyFirm'));
  }
};

export const init = ({ state }) => {
  store.dispatch('game/nextTimerPlayer');
  bot.throwDices();
  runTimer(() => {
    if (state.timer.time < stepTime) {
      store.dispatch('game/tickPlayer');
    } else {
      store.dispatch('players/nextPlayer');
      bot.throwDices();
      store.dispatch('game/nextTimerPlayer');
      store.dispatch('chat/nextPlayerStep');
    }
  });
};

const $hat = (type, places) => {
  if (type === 'hat') {
    const placeId = random(places.length);
    store.dispatch('chat/hat', placeId);
    store.dispatch('players/setPlayerPosition', placeId);
    store.dispatch('chat/nextPlayerStep');
  }
};

const $tax = (type, playerId, value) => {
  if (type === 'tax') {
    store.dispatch('chat/tax', value);
    store.dispatch('players/takeMoney', { id: playerId, value });
    store.dispatch('chat/nextPlayerStep');
  }
};

const $bonus = (type, playerId, value) => {
  if (type === 'bonus') {
    store.dispatch('chat/bonus', value);
    store.dispatch('players/giveMoney', { id: playerId, value });
    store.dispatch('chat/nextPlayerStep');
  }
};

const $reverse = (type, playerId) => {
  if (type === 'reverse') {
    alert('REVERSE');
    store.dispatch('chat/reverse');
    store.dispatch('players/setReverse', { id: playerId });
    store.dispatch('chat/nextPlayerStep');
  }
};

const $payRent = (type, playerId, ownerId, price) => {
  if (type === 'firm' && ownerId !== -1 && ownerId !== playerId) {
    store.dispatch('chat/takeMoney', { id: playerId, value: price });
    store.dispatch('players/takeMoney', { id: playerId, value: price });
    store.dispatch('chat/giveMoney', { id: ownerId, value: price });
    store.dispatch('players/giveMoney', { id: ownerId, value: price });
    store.dispatch('players/nextPlayer');
    bot.throwDices();
    store.dispatch('game/nextTimerPlayer');
    store.dispatch('chat/nextPlayerStep');
  }
};

const $myState = (type, playerId, ownerId) => {
  if (type === 'firm' && ownerId !== -1 && ownerId === playerId) {
    store.dispatch('players/nextPlayer');
    bot.throwDices();
    store.dispatch('game/nextTimerPlayer');
  }
};

const $isNotFirm = (type) => {
  if (type !== 'firm') {
    console.log('is not firm', type);
    store.dispatch('players/nextPlayer');
    bot.throwDices();
    store.dispatch('game/nextTimerPlayer');
  }
};


export const playerThrewDices = ({ rootGetters }, { total, one, sec }) => {
  //  runTimer(pid);
  const {
    id: playerId,
    isReverse
  } = rootGetters['players/currentPlayer'];

  store.dispatch('chat/playerThrew', { total, one, sec });
  const newTotal = isReverse ? total * -1 : total;

  if (one === sec) {
    store.dispatch('players/setDouble', playerId);
  }

  store.dispatch('game/resetTimer');
  store.dispatch('players/movePlayer', newTotal);
  store.dispatch('players/removeReverse', { id: playerId });
  store.dispatch('chat/playerMove');

  const {
    value,
    type,
    ownerId,
    price,
    places
  } = rootGetters['gameboard/currentCard'];

  $hat(type, places);
  $tax(type, playerId, value);
  $bonus(type, playerId, value);
  $reverse(type, playerId, value);
  $payRent(type, playerId, ownerId, price);
  $myState(type, playerId, ownerId);
  $isNotFirm(type);
  bot.buy();
};

export const buyFirm = ({ rootGetters }) => {
  const {
    id: playerId,
    wallet
  } = rootGetters['players/currentPlayer'];

  const {
    id,
    type,
    ownerId,
    price
  } = rootGetters['gameboard/currentCard'];

  if (ownerId === -1 && type === 'firm') {
    if (wallet > price) {
      store.dispatch('gameboard/buyFirm', { id, playerId });
      store.dispatch('chat/buyFirm', { id, playerId });
      store.dispatch('players/nextPlayer');
      bot.throwDices();
      store.dispatch('game/nextTimerPlayer');
      store.dispatch('chat/nextPlayerStep');
    } else {
      alert('FOOL');
    }
  }
};

export const tickPlayer = ({ commit }) => {
  commit(types.PLAYER_TIMER_TICK);
};

export const resetTimer = ({ commit }) => {
  commit(types.RESET_TIMER);
};

export const nextTimerPlayer = ({ commit, rootGetters }) => {
  const { id: playerId } = rootGetters['players/currentPlayer'];
  commit(types.NEXT_TIMER_PLAYER, playerId);
};

export default {
  init,
  playerThrewDices,
  buyFirm,
  tickPlayer,
  nextTimerPlayer,
  resetTimer,
};
