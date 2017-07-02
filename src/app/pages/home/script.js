/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import { mapState } from 'vuex';

export default {
  components: {},
  computed: mapState({
    topCards: state => state.gameboard.topCards,
    leftCards: state => state.gameboard.leftCards,
    rightCards: state => state.gameboard.rightCards,
    bottomCards: state => state.gameboard.bottomCards
  }),
};
