/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */

import fp from 'lodash/fp';

export default {
  boardPositionByCurrentPlayer: ({ list }, g, rs, rg) =>
     fp.find({ position: fp.get('players/currentPlayer.position')(rg) })(list)

};
