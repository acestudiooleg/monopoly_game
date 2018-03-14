/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';
import * as App from './app';

window.log = data => {
  console.log(data);
  return data;
};

require('./bootstrap');

new Vue(App).$mount('#app');
