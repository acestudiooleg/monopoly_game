/* ============
 * cardDescription Component
 * ============
 * https://vuejs.org/v2/guide/components.html
 */

const card = {
  title: 'Трансфигурация сегодня',
  description: 'серьёзный научный журнал о современном положении дел в трансфигурации, содержащий разного рода статьи об этой магической дисциплине и обсуждения различного рода проблем и тенденций.',
  images: ['dementor'],

  price: {
    start: 150,
    morgage: 75,
    buyout: 165,
    share: 125
  },
  income: {
    base: 5,
    monopoly: 10,
    one_star: 25,
    two_star: 75,
    three_star: 225,
    four_star: 400,
    big_star: 625
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
