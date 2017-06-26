/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules
import account from './modules/account';
import auth from './modules/auth';
import chat from './modules/chat';
import players from './modules/players';
import gameBoard from './modules/game-board';
import game from './modules/game';


const each = iterator => (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = iterator(obj[key], key);
  });
  return newObj;
};

const pureMutation = each((module) => {
  module.mutations = each(mutation => ((state, payload) => {
    const result = mutation(state, payload);
    if (result) {
      if (state instanceof Array) {
        state.splice(0, state.length);
      }
      each((x, key) => (state[key] = x))(result);
    }
  }))(module.mutations);
  return module;
});

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: pureMutation({
    account,
    auth,
    chat,
    players,
    gameBoard,
    game,
  }),

  /**
   * If strict mode should be enabled
   */
  strict: debug,

  /**
   * Plugins used in the store
   */
  plugins: []// debug ? [createLogger()] : [],
});
