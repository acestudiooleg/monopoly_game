/* ============
 * State of the gameboard module
 * ============
 */

import { find } from 'lodash/fp';

const makeBoard = (board) => {
  board.forEach((card) => {
    if (card.type === 'firm') {
      const price = card.price;
      card.morgage = Math.ceil((price / 2));
      card.buyout = Math.ceil(price);
      card.build = Math.ceil((price / 2) * 4);
      card.base = Math.ceil((price / 20));
      card.oneStar = Math.ceil(price / 5);
      card.twoStar = Math.ceil(price / 2);
      card.threeStar = price;
      card.fourStar = Math.ceil(price * 2);
      card.bigStar = Math.ceil(price * 4);
      card.isMonopoly = false;
      card.ownerId = -1;
      card.status = 'free';
      card.roundNumberFromPleged = 0;
    }
  });
  return board;
};

const hat = {
  id: 3,
  title: 'Hat',
  description: 'Hat',
  type: 'hat',
  name: 'hat',
  class: 'hat',
  images: ['hat'],
  places: [6, 34, 25, 16],
  skillId: 1,
  skillDescriptions: 'Рандомно перебрасывает по полю'
};

const moneyPlusH14 = {
  id: 14,
  title: 'Bonus',
  description: 'bonus',
  type: 'bonus',
  name: 'bonus',
  value: 200,
  class: 'add_money_h',
  images: ['add_money_h'],
  skillId: 0,
};

const moneyPlusV5 = {
  id: 5,
  title: 'Bonus',
  description: 'bonus',
  type: 'bonus',
  name: 'bonus',
  class: 'add_money_v',
  images: ['add_money_v'],
  value: 300,
};

const moneyPlusV27 = {
  id: 27,
  title: 'Bonus',
  description: 'bonus',
  type: 'bonus',
  name: 'bonus',
  value: 400,
  class: 'add_money_v',
  images: ['add_money_v']
};

const moneyMinusV9 = {
  id: 9,
  title: 'Tax',
  description: 'Tax',
  type: 'Tax',
  name: 'Tax',
  value: 200,
  class: 'give_money_v',
  images: ['give_money_v']
};

const moneyMinusV22 = {
  id: 22,
  title: 'Tax',
  description: 'Tax',
  type: 'Tax',
  name: 'Tax',
  value: 100,
  class: 'give_money_v',
  images: ['give_money_v']
};


const moneyMinusH36 = {
  id: 36,
  title: 'Tax',
  description: 'Tax',
  type: 'tax',
  name: 'tax',
  value: 300,
  class: 'give_money_h',
  images: ['give_money_h']
};

const spells7 = {
  id: 7,
  title: 'Spells',
  description: 'Spells',
  type: 'spells',
  name: 'spells',
  class: 'spells',
  images: ['spells'],
  skillId: 2,
  skillDescriptions: 'Заклятие можно применять на других игроков, есть варианты: реверс, пропуск хода, отжать денег, выбрав опцию и игрока нужно кинуть кубик, если выпадет четное то то заклятие применится на оппонента, если не четное то на самого игрока'
};
const spells26 = {
  id: 26,
  title: 'Spells',
  description: 'Spells',
  type: 'spells',
  name: 'spells',
  class: 'spells',
  images: ['spells'],
  skillId: 2,
  skillDescriptions: 'Заклятие можно применять на других игроков, есть варианты: реверс, пропуск хода, отжать денег, выбрав опцию и игрока нужно кинуть кубик, если выпадет четное то то заклятие применится на оппонента, если не четное то на самого игрока'
};


const reverse = {
  id: 24,
  title: 'Reverse',
  description: 'Reverse',
  type: 'Reverse',
  name: 'Reverse',
  class: 'reverse',
  images: ['reverse'],
  skillId: 3
};

const start = {
  id: 0,
  isHideName: true,
  title: 'Start',
  description: 'Start',
  type: 'start',
  name: 'start',
  class: 'start square',
  images: ['start'],
  value: 400,
  skillId: 0
};

const azkaban = {
  id: 12,
  isHideName: true,
  title: 'Azkaban',
  description: 'Azkaban',
  type: 'azkaban',
  name: 'azkaban',
  class: 'azkaban square',
  value: 300,
  images: ['dementor', 'azkaban'],
  skillId: 0
};

const hagrid = {
  id: 31,
  isHideName: true,
  title: 'Hagrid',
  description: 'Hagrid',
  type: 'hagrid',
  name: 'hagrid',
  class: 'hagrid-square square',
  goto: 0,
  images: ['reverse', 'hagrid'],
  skillId: 0
};

const quidditch = {
  id: 19,
  title: 'quidditch',
  description: 'quidditch',
  type: 'quidditch',
  name: 'quidditch',
  class: 'quidditch square',
  value: 300,
  images: ['quidditch'],
  skillId: 0
};


// ======NEWSPAPERS======
const quibbler = {
  id: 1,
  title: 'Quibbler',
  description: 'Quibbler',
  type: 'firm',
  name: 'quibbler',
  class: 'quibbler',
  images: ['quibbler'],
  gradient: 'gradient-red',
  monopolyId: 1,
  price: 150,
  skillId: 0
};

const today = {
  id: 2,
  title: 'Today',
  description: 'Transfiguration Today',
  type: 'firm',
  name: 'today',
  class: 'today',
  images: ['today'],
  monopolyId: 1,
  price: 150,
  skillId: 0
};

const prophet = {
  id: 4,
  title: 'Prophet',
  description: 'Dayly Prophet',
  type: 'firm',
  name: 'prophet',
  class: 'dayly_prophet',
  images: ['dayly_prophet'],
  monopolyId: 1,
  price: 150,
  skillId: 0
};

// ======FACULCY======
const gryffindor = {
  id: 6,
  title: 'Gryffindor',
  description: 'gryffindor',
  type: 'firm',
  name: 'gryffindor',
  class: 'gryffindor',
  monopolyId: 2,
  images: ['gryffindor'],
  price: 500,
  skillId: 0
};

const hufflepuff = {
  id: 34,
  title: 'Hufflepuff',
  description: 'Hufflepuff',
  type: 'firm',
  name: 'hufflepuff',
  class: 'hufflepuff',
  images: ['hufflepuff'],
  monopolyId: 2,
  price: 500,
  skillId: 0
};

const ravenclaw = {
  id: 16,
  title: 'Ravenclaw',
  description: 'Ravenclaw',
  type: 'firm',
  name: 'ravenclaw',
  class: 'ravenclaw',
  images: ['ravenclaw'],
  monopolyId: 2,
  price: 500,
  skillId: 0
};

const slizerin = {
  id: 25,
  title: 'Slizerin',
  description: 'Slizerin',
  type: 'firm',
  name: 'slizerin',
  class: 'slizerin',
  images: ['slizerin'],
  monopolyId: 2,
  price: 600,
  skillId: 0
};


// ======SHOPS========
const wheezes = {
  id: 8,
  title: 'Wheezes',
  description: 'Weasleys\' Wizard Wheezes',
  type: 'firm',
  name: 'wheezes',
  class: 'wheezes',
  images: ['wheezes'],
  monopolyId: 3,
  price: 300,
  skillId: 0
};

const zonko = {
  id: 10,
  title: 'Zonko',
  description: 'Zonko',
  type: 'firm',
  name: 'zonko',
  class: 'zonko',
  images: ['zonko'],
  monopolyId: 3,
  price: 300,
  skillId: 0
};

const borgin = {
  id: 11,
  title: 'Borgin and Burkes',
  description: 'Borgin and Burkes',
  type: 'firm',
  name: 'borgin',
  class: 'borgin',
  stars: 2,
  images: ['borgin'],
  monopolyId: 3,
  price: 300,
  skillId: 0
};


// ======TRANSPORT======
const kingsCross = {
  id: 37,
  title: 'Kingscross',
  description: 'Kings cross',
  type: 'firm',
  name: 'kingscross',
  class: 'kingscross',
  images: ['kingscross'],
  monopolyId: 4,
  goto: 27,
  price: 900
};

const apparition = {
  id: 35,
  title: 'Apparition',
  description: 'Apparition',
  type: 'firm',
  name: 'apparition',
  class: 'apparition',
  images: ['apparition'],
  monopolyId: 4,
  price: 900,
  skillId: 4,
  skillDescriptions: 'Можна телепортироваться в любую точку,  денег за старт не дают, только если телепортироваться на ячейку до старта'
};


// ======MINISTRY MAGIC======
const ministryMagic = {
  id: 13,
  title: 'Ministry of Magic',
  description: 'Ministry of Magic',
  type: 'firm',
  name: 'ministryMagic',
  class: 'ministryMagic',
  images: ['ministryMagic'],
  monopolyId: 5,
  price: 350,
  skillId: 4
};

const secretDepartament = {
  id: 15,
  title: 'Secret depart.',
  description: 'Secret departament',
  type: 'firm',
  name: 'secretDepartament',
  class: 'secretDepartament',
  images: ['secretDepartament'],
  monopolyId: 5,
  price: 350,
  skillId: 4,
};


// ======DEATH GIFTS======
const invisibleCloak = {
  id: 33,
  title: 'Invisible Cloak',
  description: 'Invisible Cloak',
  type: 'firm',
  name: 'Invisible Cloak',
  class: 'invisibleCloak',
  images: ['invisibleCloak'],
  monopolyId: 6,
  price: 800,
  skillId: 5,
  skillDescriptions: 'Все владения и стоимость исчезает с карты до хода игрока, в этот период ничего нельзя купить, продать или обменять, однако можна получать доход или расход от владений'
};

const elderWand = {
  id: 32,
  title: 'Elder Wand',
  description: 'Elder Wand',
  type: 'firm',
  name: 'Elder Wand',
  class: 'elderWand',
  images: ['elderWand'],
  monopolyId: 6,
  price: 500,
  skillId: 6,
  skillDescriptions: 'Если способность не активирована то нужно заплатить иначе прийдется отдать одну из звезд, эта способность активируется только после 10 раундов если никто не попал на поле до этого. Звезда отнимается рандомно'
};

// ======STREETS======
const grimmauldPlace = {
  id: 17,
  title: 'Grimmauld Place',
  description: 'Grimmauld Place',
  type: 'firm',
  name: 'Grimmauld Place',
  class: 'grimmauldPlace',
  images: ['grimmauldPlace'],
  monopolyId: 7,
  price: 450,
  skillId: 0
};

const diagonAlley = {
  id: 18,
  title: 'Diagon Alley',
  description: 'Diagon Alley',
  type: 'firm',
  name: 'Diagon Alley',
  class: 'diagonAlley',
  images: ['diagonAlley'],
  monopolyId: 7,
  price: 800,
  goto: 8,
  skillId: 0
};

// ======SCHOOLS======
const beauxbatons = {
  id: 30,
  title: 'Beaux batons',
  description: 'Beauxbatons',
  type: 'firm',
  name: 'Beauxbatons',
  class: 'beauxbatons',
  images: ['beauxbatons'],
  monopolyId: 8,
  price: 700,
  skillId: 0
};

const hogwarts = {
  id: 29,
  title: 'Hogwarts',
  description: 'Hogwarts',
  type: 'firm',
  name: 'hogwarts',
  class: 'hogwarts',
  images: ['hogwarts'],
  monopolyId: 8,
  price: 650,
  skillId: 0
};

const durmstrang = {
  id: 28,
  title: 'Durm strang',
  description: 'Furmstrang',
  type: 'firm',
  name: 'durmstrang',
  class: 'durmstrang',
  images: ['durmstrang'],
  monopolyId: 8,
  price: 650,
  skillId: 0
};

// ======ARTIFACTS======
const gobletFire = {
  id: 23,
  title: 'Goblet of fire',
  description: 'Goblet of fire',
  type: 'firm',
  name: 'Goblet of fire',
  class: 'goblet_fire',
  images: ['goblet_fire'],
  monopolyId: 9,
  price: 500,
  skillId: 0
};

const sword = {
  id: 21,
  title: 'Sword of Gryffindor',
  description: 'Sword of Gryffindor',
  type: 'firm',
  name: 'Sword of Gryffindor',
  class: 'sword',
  images: ['sword'],
  monopolyId: 9,
  price: 550
};

const stone = {
  id: 20,
  title: 'Philosoph. Stone',
  description: 'Philosopher\'s Stone',
  type: 'firm',
  name: 'Philosopher\'s Stone',
  class: 'stone',
  images: ['stone'],
  monopolyId: 9,
  price: 550
};


const topCards = [
  start, // 0
  quibbler, // 1
  today, // 2
  hat, // 3
  prophet, // 4
  moneyPlusV5, // 5
  gryffindor, // 6
  spells7, // 7
  wheezes, // 8
  moneyMinusV9, // 9
  zonko, // 10
  borgin, // 11
  azkaban // 12
];
const leftCards = [
  kingsCross, // 37
  moneyMinusH36, // 36
  apparition, // 35
  hufflepuff, // 34
  invisibleCloak, // 33
  elderWand // 32
];
const rightCards = [
  ministryMagic, // 13
  moneyPlusH14, // 14
  secretDepartament, // 15
  ravenclaw, // 16
  grimmauldPlace, // 17
  diagonAlley // 18
];


const bottomCards = [
  hagrid, // 31
  beauxbatons, // 30
  hogwarts, // 29
  durmstrang, // 28
  moneyPlusV27, // 27
  spells26, // 26
  slizerin, // 25
  reverse, // 24
  gobletFire, // 23
  moneyMinusV22, // 22
  sword, // 21
  stone, // 20
  quidditch // 19
];

const board = makeBoard(topCards.concat(rightCards, bottomCards, leftCards));

export default {
  topCards,
  leftCards,
  rightCards,
  bottomCards,
  board,
  getCard: id => find({id})(board)
};
