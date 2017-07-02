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
import pureMutation from '@/utils/pureMutation';
// import createLogger from 'vuex/dist/logger';

// Modules
import gameboard from './modules/gameboard';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const m = {
  modules: {
    gameboard,

  }
};

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: pureMutation(m.modules),

  /**
   * If strict mode should be enabled
   */
  strict: debug,

  /**
   * Plugins used in the store
   */
//  plugins: debug ? [createLogger()] : [],
});
