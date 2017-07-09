/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VCardDescription from '@/components/cardDescription';
import VChat from '@/components/chat';
import VPlayers from '@/components/players';

import { mapState, mapGetters } from 'vuex';
import { find, filter } from 'lodash/fp';
import { runTimer, stopTimer } from '@/utils/timer';
import { rollDice} from '@/utils/dice';


export default {
  components: {
    VCardDescription,
    VChat,
    VPlayers
  },
  computed: {
    ...mapGetters('players', ['currentPlayer']),
    ...mapState({
      topCards: state => state.gameboard.topCards,
      leftCards: state => state.gameboard.leftCards,
      rightCards: state => state.gameboard.rightCards,
      bottomCards: state => state.gameboard.bottomCards,
      board: state => state.gameboard.board,
      players: state => state.players,
      chat: state => state.chat
    })
  },
  created() {
    this.$store.dispatch('game/init');
  },
  methods: {
    playersCountOnField(card) {
      const players = filter({ position: card.id }, this.players.list).length;
      return players ? `players-num-${players}` : '';
    },
    owner(card) {
      const owner = find({ id: card.ownerId }, this.players.list);
      return owner ? `gradient-${owner.color}` : '';
    },
    buyFirm() {
      const { $store: { dispatch }} = this;
      dispatch('game/buyFirm');
    },
    throwDices() {
      const dices = rollDice();
      const { $store: { dispatch }, currentPlayer } = this;
      // stopTimer(currentPlayer.id);
      dispatch('players/resetTimeout', currentPlayer.id);
      dispatch('game/playerThrewDices', dices);
    }
  }
};
