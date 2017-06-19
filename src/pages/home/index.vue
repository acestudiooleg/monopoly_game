<template>
  <v-layout>
   <div class="container-fluid">
  <div class="row">
    <div class="col-md-6 chat">
      <ul v-if="chatMessages.length">
        <li v-for="message in chatMessages">
          <v-chat-message-builder :message="message"/>
        </li>
      </ul>
      <div v-else>
        Messages not found
      </div>
    </div>
    <div class="col-md-6 players">
      <ul>
        <li v-for="player in players">
          <span class="player" :class="[player.isActive ? 'activePlayer' : '', player.color ]">{{player.name}}</span>
          <span v-if="player.isActive"> - Active</span>
        </li>
      </ul>
    </div>
  </div>
   <div class="row">
    <div class="col-md-12 game-board">
     <v-game-board-builder :board="gameBoard" :players="players"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">

      <button @click="rollDice" type="button" class="btn btn-success btn-block btn-lg">
       Roll Dice
      </button>
    </div>
  </div>
</div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

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
        const { gameBoard, $store: { dispatch } } = this;
        const payload = { currentPlayer: this.currentPlayer, dices };
        dispatch('chat/playerThrew', payload);
        dispatch('players/playerMove', payload);


        const boardPosition = _.find({ position: this.currentPlayer.position })(gameBoard);
        dispatch('chat/playerMove', {
          currentPlayer: this.currentPlayer, boardPosition,
        });

        dispatch('players/nextPlayer');
        dispatch('chat/nextPlayerStep', this.currentPlayer);
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
</script>
