/* ============
 * Mutation types for the account module
 * ============
 *
 * The mutation types that are available
 * on the account module.
 */

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';

export const messageType = {
  PLAYER_THREW: 'PLAYER_THREW',
  PLAYER_STEP: 'PLAYER_STEP',
  PLAYER_MOVE: 'PLAYER_MOVE',
  HAT: 'HAT',
  TAX: 'TAX',
  BONUS: 'BONUS',
  REVERSE: 'REVERSE',
  TAKE_MONEY: 'TAKE_MONEY',
  GIVE_MONEY: 'GIVE_MONEY',
  BUY_FIRM: 'BUY_FIRM',
};

export default {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  REMOVE_MESSAGE,
};
