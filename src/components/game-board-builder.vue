<template>
  <table>
    <tr v-for="row in parsedBoard">
      <td v-for="col in row">
        {{col.name}}
        <div>
          <div class="playerToken" v-for="player in players" :class="player.color" v-if="player.position === col.position"></div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
  import boardConverter from '@/utils/boardConverter';

  export default {
    props: ['board', 'players'],
    computed: {
      parsedBoard() {
        return boardConverter(this.board, 3);
      },
    },
    methods: {
    },
  };

</script>
