/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
import { findIndex, filter } from 'lodash/fp';

import { ADD_MESSAGE, EDIT_MESSAGE, REMOVE_MESSAGE } from './mutation-types';


export default {
  [ADD_MESSAGE](state, { type, data }) {
    state.list.push({ type, data, id: state.list.length + 1 });
  },
  [EDIT_MESSAGE](state, { data, id }) {
    const i = findIndex({ id })(state.list);
    const message = state.list[i];
    if (message) {
      state[i] = {
        ...message,
        ...data,
      };
    }
  },
  [REMOVE_MESSAGE](state, { id }) {
    state.list = filter({ id });
  },
};
