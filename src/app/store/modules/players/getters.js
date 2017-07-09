/* ============
 * Getters for the players module
 * ============
 */

import { find } from 'lodash/fp';

export default {
  currentPlayer: ({ list }) => find({ isActive: true })(list),
};
