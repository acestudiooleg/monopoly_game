/* ============
 * Mutations for the gameboard module
 * ============
 */

import { BUY_FIRM } from './mutation-types';
import { creaceMethodChangeItemInList } from '@/utils/pureMutation';

const changeItemInList = creaceMethodChangeItemInList('board');
export default [
  [BUY_FIRM, changeItemInList((_, { playerId: ownerId }) => ({ ownerId }))]
];
