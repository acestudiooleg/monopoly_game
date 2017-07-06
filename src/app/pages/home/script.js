/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VCardDescription from '@/components/cardDescription';
import VChat from '@/components/chat';
import VPlayers from '@/components/players';

import { mapState } from 'vuex';


export default {
  components: {
    VCardDescription,
    VChat,
    VPlayers
  },
  computed: mapState({
    topCards: state => state.gameboard.topCards,
    leftCards: state => state.gameboard.leftCards,
    rightCards: state => state.gameboard.rightCards,
    bottomCards: state => state.gameboard.bottomCards
  }),
};
