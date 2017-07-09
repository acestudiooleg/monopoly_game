/* ============
 * Actions for the game module
 * ============
 */

import * as types from './mutation-types';
import store from '@/store';
import { runTimer } from '@/utils/timer';
import { random } from '@/utils/dice';

export const init = ({ rootGetters }) => {
  // console.log(id);
  // runTimer(id);
};

export const playerThrewDices = ({ rootGetters }, { total, one, sec }) => {
  //  runTimer(pid);
  const {
    id: pid,
    isReverse
  } = rootGetters['players/currentPlayer'];

  store.dispatch('chat/playerThrew', { total, one, sec });
  const newTotal = isReverse ? total * -1 : total;

  if (one === sec) {
    store.dispatch('players/setDouble', pid);
  }

  store.dispatch('players/movePlayer', newTotal);
  store.dispatch('chat/playerMove');

  const {
    value,
    type,
    ownerId,
    price,
    places
  } = rootGetters['gameboard/currentCard'];

  if (type === 'hat') {
    const placeId = random(places.length);
    store.dispatch('chat/hat', placeId);
    store.dispatch('players/setPlayerPosition', placeId);
    store.dispatch('chat/nextPlayerStep');
  }

  if (type === 'tax') {
    store.dispatch('chat/tax', value);
    store.dispatch('players/takeMoney', { id: pid, value });
    store.dispatch('chat/nextPlayerStep');
  }

  if (type === 'bonus') {
    store.dispatch('chat/bonus', value);
    store.dispatch('players/giveMoney', { id: pid, value });
    store.dispatch('chat/nextPlayerStep');
  }

  if (type === 'reverse') {
    store.dispatch('chat/reverse');
    store.dispatch('players/setReverse', { id: pid });
    store.dispatch('chat/nextPlayerStep');
  }


  if (type === 'firm' && ownerId !== -1 && ownerId !== pid) {
    store.dispatch('chat/takeMoney', { id: pid, value: price });
    store.dispatch('players/takeMoney', { id: pid, value: price });
    store.dispatch('chat/giveMoney', { id: ownerId, value: price });
    store.dispatch('players/giveMoney', { id: ownerId, value: price });
    store.dispatch('players/nextPlayer');
    store.dispatch('chat/nextPlayerStep');
  }

  if (type === 'firm' && ownerId !== -1 && ownerId === pid) {
    store.dispatch('players/nextPlayer');
  }

  if (type !== 'firm') {
    store.dispatch('players/nextPlayer');
  }
};

export const buyFirm = ({ rootGetters }) => {
  const {
    id: pid
  } = rootGetters['players/currentPlayer'];

  const {
    id,
    type,
    ownerId
  } = rootGetters['gameboard/currentCard'];

  if (ownerId === -1 && type === 'firm') {
    store.dispatch('gameboard/buyFirm', { id, playerId: pid });
    store.dispatch('chat/buyFirm', { id, playerId: pid });
    store.dispatch('players/nextPlayer');
    store.dispatch('chat/nextPlayerStep');
  }
};

export default {
  init,
  playerThrewDices,
  buyFirm,
};
