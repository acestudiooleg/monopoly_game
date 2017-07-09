/* ============
 * State of 1 players module
 * ============
 */

import { find } from 'lodash/fp';

const player1 = {
  color: 'red',
  name: 'Harry Potter',
  isActive: true,
  position: 0,
  wallet: 3000,
  capital: 3000,
  timeout: 60,
  timePercent: 100,
  state: 1,
  avatar: 'harry.png'
};

const player2 = {
  color: 'green',
  name: 'Hermione Hranger',
  isActive: false,
  position: 0,
  wallet: 3000,
  capital: 3000,
  timeout: 60,
  timePercent: 100,
  state: 1,
  avatar: 'hermione.png'
};

const player3 = {
  color: 'blue',
  name: 'Ron Weasley',
  isActive: false,
  position: 0,
  wallet: 3000,
  capital: 3000,
  timeout: 60,
  timePercent: 100,
  state: 1,
  avatar: 'ron.jpg'
};

const player4 = {
  color: 'yellow',
  name: 'Draco Malfoy',
  isActive: false,
  position: 0,
  wallet: 3000,
  capital: 3000,
  timeout: 60,
  timePercent: 100,
  state: 1,
  avatar: 'draco.jpg'
};

const player5 = {
  color: 'purple',
  name: 'Ginevra Weasley',
  isActive: false,
  position: 0,
  wallet: 3000,
  capital: 3000,
  timeout: 60,
  timePercent: 100,
  state: 1,
  avatar: 'ginevra.jpg'
};


export default {
  list: [
    player1,
    player2,
    player3,
    player4,
    player5
  ].map((el, i) => ({...el, id: i + 1 })),
  getPlayer(id) {
    return find({ id })(this.list);
  }
};
