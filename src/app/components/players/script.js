/* ============
 * players Component
 * ============
 * https://vuejs.org/v2/guide/components.html
 */

import SlotMixin from '@/mixins/slot';
import {stepTime} from '@/config';

export default {
  mixins: [
    SlotMixin,
  ],
  data() {
    return {name: 'players'};
  },
  props: {
    players: {
      type: Object
    },
    timer: {
      type: Object
    }
  },
  computed: {

  },
  methods: {
    hello() {
      this.name = 'Hello World Players';
    },
    counter() {
      return 100 - ((this.timer.time * 100) / stepTime);
    },
    canPlayer(player) {
      return player.isActive && this.timer.playerId === player.id;
    },
    showTimeline(player) {
      return this.canPlayer(player) ? this.counter() : 100;
    },
    showCounter(player) {
      return this.canPlayer(player) ? `${(stepTime - this.timer.time)} sec` : '';
    }
  }
};
