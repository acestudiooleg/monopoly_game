/* ============
 * players Component
 * ============
 * https://vuejs.org/v2/guide/components.html
 */

import SlotMixin from '@/mixins/slot';

export default {
  mixins: [
    SlotMixin,
  ],
  data() {
    return {name: 'players'};
  },
  props: {

  },
  computed: {

  },
  methods: {
    hello() {
      this.name = 'Hello World Players';
    }
  }
};