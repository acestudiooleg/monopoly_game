/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */

import fp from 'lodash/fp';

export default {
  currentPlayer: fp.flow(fp.get('list'), fp.find({ isActive: true }))
};
