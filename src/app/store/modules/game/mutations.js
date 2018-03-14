/* ============
 * Mutations for the game module
 * ============
 */

import { PLAYER_TIMER_TICK, NEXT_TIMER_PLAYER, RESET_TIMER } from './mutation-types';

export default [
  [PLAYER_TIMER_TICK, ({timer: {time, playerId}}) => ({timer: { time: time + 1, playerId}})],
  [RESET_TIMER, ({timer}) => ({timer: {...timer, time: 0}})],
  [NEXT_TIMER_PLAYER, (state, playerId) => ({timer: { time: 0, playerId}})]
];
