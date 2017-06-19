<template>
  <div>
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
  </div>
</template>

<script>

  import { get } from 'lodash/fp';
  import { messageType } from '@/store/modules/chat/mutation-types';

  const throwProp = path => function throwPropInner() {
    return get(path)(this.message);
  };

  export default {
    props: ['message'],
    data() {
      return {
        ...messageType,
      };
    },
    computed: {
      currentPlayer: throwProp('data.currentPlayer'),
      dices: throwProp('data.dices'),
      type: throwProp('type'),
      currentPlayerBoardPostion: throwProp('data.boardPosition'),
    },
    methods: {
      isType(type) {
        return this.type === type;
      },
    },
  };

</script>
