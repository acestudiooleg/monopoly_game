/* ============
 * Getters for the gameboard module
 * ============
 */

import { find } from 'lodash/fp';

export default {
  cardsLength: ({ board }) => board.length,
  currentCard: ({ board }, getters, rootState, rootGetters) => {
    const currentPlayer = rootGetters['players/currentPlayer'];
    return find({ id: currentPlayer.position }, board);
  },
  currentCardName: ({ board }, getters, rootState, rootGetters) => {
    try {
      const currentPlayer = rootGetters['players/currentPlayer'];
      return find({ id: currentPlayer.position }, board).title;
    } catch (err) {
      debugger;
      return null;
    }
  }
};
