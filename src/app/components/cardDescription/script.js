/* ============
 * cardDescription Component
 * ============
 * https://vuejs.org/v2/guide/components.html
 */

//

const card = {
  title: 'Трансфигурация сегодня',
  description: 'серьёзный научный журнал о современном положении дел в трансфигурации, содержащий разного рода статьи об этой магической дисциплине и обсуждения различного рода проблем и тенденций.',
  images: ['dementor'],

  price: {
    start: 150,
    morgage: 75, // start/2
    buyout: 150, // start
    share: 100 // start/3 * 4
  },
  income: {
    base: 8, // start / 20
    monopoly: 16, // start /10
    one_star: 32, // start / 5
    two_star: 80, // start / 2
    three_star: 150, // start
    four_star: 300, // start * 2
    big_star: 600 // start * 4
  }
};


export default {
  mixins: [
  ],
  data() {
    return {card};
  },
  props: {

  },
  computed: {

  },
  methods: {
    hello() {
      this.name = 'Hello World Card Description';
    }
  }
};
