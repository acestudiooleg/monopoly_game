/* ============
 * chat Component
 * ============
 * https://vuejs.org/v2/guide/components.html
 */

import { messageType } from '@/store/modules/chat/mutation-types';


/*
 <p v-if="isType(PLAYER_THREW)">
      Игрок <span :class="currentPlayer.color"> {{currentPlayer.name}}</span>
      выбросил {{dices.one}} и {{dices.sec}} в сумме {{dices.total}}
    </p>
    <p v-if="isType(PLAYER_STEP)">
      Очередь игрока: <span :class="currentPlayer.color"> {{currentPlayer.name}}</span>
    </p>
    <p v-if="isType(PLAYER_MOVE)">
      Игрок: <span :class="currentPlayer.color"> {{currentPlayer.name}}</span>
      перемещается на поле {{currentPlayerBoardPostion.name}}
    </p>
*/
const {
  PLAYER_THREW,
  PLAYER_STEP,
  PLAYER_MOVE,
  HAT,
  TAX,
  BONUS,
  REVERSE,
  TAKE_MONEY,
  GIVE_MONEY,
  BUY_FIRM,
} = messageType;

export default {
  props: {
    chat: Object
  },
  computed: {
    messages() {
      return this.chat.list.map(({ type, data }) => {
        let color = 'game';
        let name = 'Game';
        let body = '';
        if (PLAYER_THREW === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { one, sec } = data.dices;
          const double = one === sec ? 'a double ' : '';
          body = `threw ${double}${one}:${sec}`;
        }
        if (PLAYER_MOVE === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { title, ownerId } = data.card;
          const free = ownerId === -1 ? '; Field is free.' : '';
          body = `move to field ${title}${free}`;
        }
        if (PLAYER_STEP === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          body = `Turn player ${name} now`;
          name = 'Game';
        }
        if (HAT === type) {
          const { title } = data.card;
          body = `Hat decided move you to field ${title}`;
        }
        if (TAX === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { value } = data;
          body = `should pay a tax value -${value} G`;
        }
        if (BONUS === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { value } = data;
          body = `got bonus value ${value} G`;
        }
        if (REVERSE === type) {
          body = 'You will move to backward direction in next step';
        }
        if (TAKE_MONEY === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { value } = data;
          body = `pay rent: ${value} G`;
        }
        if (GIVE_MONEY === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { value } = data;
          body = `got: ${value} G`;
        }

        if (BUY_FIRM === type) {
          const player = data.player;
          color = player.color;
          name = player.name;
          const { card } = data;
          body = `bought field ${card.title}`;
        }

        return {
          color,
          name,
          body
        };
      });
    }
  },
  methods: {
    hello() {
      this.name = 'Hello World Chat';
    }
  }
};
