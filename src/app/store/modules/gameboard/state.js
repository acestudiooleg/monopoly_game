/* ============
 * State of the gameboard module
 * ============
 */


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
};

const hat = {
  id: 3,
  title: 'Hat',
  description: 'Hat',
  type: 'firm',
  name: 'hat',
  class: 'hat',
  images: ['hat'],
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
  title: 'Ущерб',
  description: 'Ущерб',
  type: 'Ущерб',
  name: 'Ущерб',
  value: -200,
  class: 'give_money_v',
  images: ['give_money_v']
};

const moneyMinusV22 = {
  id: 22,
  title: 'Ущерб',
  description: 'Ущерб',
  type: 'Ущерб',
  name: 'Ущерб',
  value: -100,
  class: 'give_money_v',
  images: ['give_money_v']
};


const moneyMinusH36 = {
  id: 36,
  title: 'Tax',
  description: 'Tax',
  type: 'tax',
  name: 'tax',
  value: -300,
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


const revers = {
  id: 24,
  title: 'Реверс',
  description: 'Реверс',
  type: 'Реверс',
  name: 'Реверс',
  class: 'revers',
  images: ['revers'],
  skillId: 3
};

const start = {
  id: 0,
  isHideName: true,
  title: 'Start',
  description: 'Start',
  type: 'start',
  name: 'start',
  class: 'start',
  images: ['start'],
  value: 400,
  square: true,
  skillId: 0
};

const azkaban = {
  id: 12,
  isHideName: true,
  title: 'Azkaban',
  description: 'Azkaban',
  type: 'azkaban',
  name: 'azkaban',
  class: 'azkaban',
  value: -300,
  images: ['dementor', 'azkaban'],
  square: true,
  skillId: 0
};

const hagrid = {
  id: 31,
  isHideName: true,
  title: 'Хагрид',
  description: 'Хагрид',
  type: 'Хагрид',
  name: 'Хагрид',
  class: 'hagrid-square',
  goto: 0,
  images: ['revers', 'hagrid'],
  square: true,
  skillId: 0
};

const quidich = {
  id: 19,
  title: 'Квидич',
  description: 'Квидич',
  type: 'Квидич',
  name: 'Квидич',
  class: 'quidich',
  value: 300,
  images: ['quidich'],
  square: true,
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
  title: 'Transfiguration Today',
  description: 'Transfiguration Today',
  type: 'Firm',
  name: 'today',
  class: 'today',
  images: ['today'],
  monopolyId: 1,
  price: 150,
  skillId: 0
};

const prophet = {
  id: 4,
  title: 'Dayly Prophet',
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
  type: 'ашкь',
  name: 'gryffindor',
  class: 'gryffindor',
  monopolyId: 2,
  images: ['gryffindor'],
  price: 500,
  skillId: 0
};

const pufenduy = {
  id: 34,
  title: 'Пуфендуй',
  description: 'Пуфендуй',
  type: 'Пуфендуй',
  name: 'Пуфендуй',
  class: 'pufenduy',
  images: ['pufenduy'],
  monopolyId: 2,
  price: 500,
  skillId: 0
};

const kogtevran = {
  id: 16,
  title: 'Когтевран',
  description: 'Когтевран',
  type: 'Когтевран',
  name: 'Когтевран',
  class: 'kogtevran',
  images: ['kogtevran'],
  monopolyId: 2,
  price: 500,
  skillId: 0
};

const slizaren = {
  id: 25,
  title: 'Слизарен',
  description: 'Слизарен',
  type: 'Слизарен',
  name: 'Слизарен',
  class: 'slizaren',
  images: ['slizaren'],
  monopolyId: 2,
  price: 600,
  skillId: 0
};


// ======SHOPS========
const wheezes = {
  id: 8,
  title: 'Weasleys\' Wizard Wheezes',
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

const gorbin = {
  id: 11,
  title: 'Borgin and Burkes',
  description: 'Borgin and Burkes',
  type: 'firm',
  name: 'gorbin',
  class: 'gorbin',
  stars: 2,
  images: ['gorbin'],
  monopolyId: 3,
  price: 300,
  skillId: 0
};


// ======TRANSPORT======
const kingCross = {
  id: 37,
  title: 'Kings cross',
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
  title: 'Отдел тайн',
  description: 'Отдел тайн',
  type: 'Отдел тайн',
  name: 'Отдел тайн',
  class: 'secret_departament',
  images: ['secret_departament'],
  monopolyId: 5,
  price: 350,
  skillId: 4,
};


// ======DEATH GIFTS======
const invisible = {
  id: 33,
  title: 'Мантия невидимка',
  description: 'Мантия невидимка',
  type: 'Мантия невидимка',
  name: 'Мантия невидимка',
  class: 'invisibleCoat',
  images: ['invisibleCoat'],
  monopolyId: 6,
  price: 800,
  skillId: 5,
  skillDescriptions: 'Все владения и стоимость исчезает с карты до хода игрока, в этот период ничего нельзя купить, продать или обменять, однако можна получать доход или расход от владений'
};

const stick = {
  id: 32,
  title: 'Старшая палочка',
  description: 'Старшая палочка',
  type: 'Старшая палочка',
  name: 'Старшая палочка',
  class: 'stick',
  images: ['stick'],
  monopolyId: 6,
  price: 500,
  skillId: 6,
  skillDescriptions: 'Если способность не активирована то нужно заплатить иначе прийдется отдать одну из звезд, эта способность активируется только после 10 раундов если никто не попал на поле до этого. Звезда отнимается рандомно'
};

// ======STREETS======
const grimm = {
  id: 17,
  title: 'Площадь Гримма',
  description: 'Площадь Гримма',
  type: 'Площадь Гримма',
  name: 'Площадь Гримма',
  class: 'square_grimm',
  images: ['square_grimm'],
  monopolyId: 7,
  price: 450,
  skillId: 0
};

const kosoy = {
  id: 18,
  title: 'Косой переулок',
  description: 'Косой переулок',
  type: 'Косой переулок',
  name: 'Косой переулок',
  class: 'kosoy_pereulok',
  images: ['kosoy_pereulok'],
  monopolyId: 7,
  price: 800,
  goto: 8,
  skillId: 0
};

// ======SCHOOLS======
const sharmbatton = {
  id: 30,
  title: 'Шарм баттон',
  description: 'Шарм баттон',
  type: 'Шарм баттон',
  name: 'Шарм баттон',
  class: 'sharmbautton',
  images: ['sharmbautton'],
  monopolyId: 8,
  price: 700,
  skillId: 0
};

const hogvarts = {
  id: 27,
  title: 'Хогвартс',
  description: 'Хогвартс',
  type: 'Хогвартс',
  name: 'Хогвартс',
  class: 'hogvards',
  images: ['hogvards'],
  monopolyId: 8,
  price: 650,
  skillId: 0
};

const durmstrang = {
  id: 28,
  title: 'Дурм странг',
  description: 'Дурм странг',
  type: 'Дурм странг',
  name: 'Дурм странг',
  class: 'durmstrang',
  images: ['durmstrang'],
  monopolyId: 8,
  price: 650,
  skillId: 0
};

// ======ARTIFACTS======
const gobletFire = {
  id: 23,
  title: 'Кубок огня',
  description: 'Кубок огня',
  type: 'Кубок огня',
  name: 'Кубок огня',
  class: 'goblet_fire',
  images: ['goblet_fire'],
  monopolyId: 9,
  price: 500,
  skillId: 0
};

const sword = {
  id: 21,
  title: 'Меч грифинд.',
  description: 'Меч грифинд.',
  type: 'Меч грифинд.',
  name: 'Меч грифинд.',
  class: 'sword',
  images: ['sword'],
  monopolyId: 9,
  price: 550
};

const stone = {
  id: 20,
  title: 'Философ. камень',
  description: 'Философ. камень',
  type: 'Философ. камень',
  name: 'Философ. камень',
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
  gorbin, // 11
  azkaban // 12
];
const leftCards = [
  kingCross, // 37
  moneyMinusH36, // 36
  apparition, // 35
  pufenduy, // 34
  invisible, // 33
  stick // 32
];
const rightCards = [
  ministryMagic, // 13
  moneyPlusH14, // 14
  secretDepartament, // 15
  kogtevran, // 16
  grimm, // 17
  kosoy // 18
];


const bottomCards = [
  hagrid, // 31
  sharmbatton, // 30
  hogvarts, // 29
  durmstrang, // 28
  moneyPlusV27, // 27
  spells26, // 26
  slizaren, // 25
  revers, // 24
  gobletFire, // 23
  moneyMinusV22, // 22
  sword, // 21
  stone, // 20
  quidich // 19
];

const board = makeBoard(topCards.concat(rightCards, bottomCards, rightCards));

export default {
  topCards,
  leftCards,
  rightCards,
  bottomCards,
  board
};
