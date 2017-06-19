/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */

import { find } from 'lodash/fp';

export default {
  currentPlayer: ({ list }) => find({ isActive: true })(list),
};
