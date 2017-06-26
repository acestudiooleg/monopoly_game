import { mapState, mapGetters } from 'vuex';
import _ from 'lodash/fp';

const random = () =>
  Math.floor(Math.random() * 2) + 1;

const rollDice = () => {
  const one = random();
  const sec = random();
  const total = one + sec;
  return { one, sec, total };
};


export default {
  components: {
    VLayout: require('@/layouts/default.vue'),
    VPanel: require('@/components/panel.vue'),
    VChatMessageBuilder: require('@/components/chat-message-builder.vue'),
    VGameBoardBuilder: require('@/components/game-board-builder.vue'),
  },

  methods: {
    calcPlayers(position) {
      return this.players.filter(pl => pl.position === position);
    },
    rollDice() {
      const dices = rollDice();
      const { $store: { dispatch } } = this;
      dispatch('game/playerThrew', dices);
    },
  },

  computed: {
    ...mapGetters('players', ['currentPlayer']),
    ...mapState({
      players: _.get('players.list'),
      chatMessages: _.get('chat.list'),
      gameBoard: _.get('gameBoard.list'),
    }),
  },
};
