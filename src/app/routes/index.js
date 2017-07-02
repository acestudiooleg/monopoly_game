/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

// Routes
import home from './home';

const index = {
  path: '/',
  redirect: '/home',
};

const other = {
  path: '/*',
  redirect: '/home',
};

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  index,
  home,
  other
];
