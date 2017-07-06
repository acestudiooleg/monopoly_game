/* ============
 * State of the gameboard module
 * ============
 */


const start = {
  isHideName: true,
  name: 'Старт',
  class: 'start',
  images: ['start'],
  square: true
};

const pridira = {
  name: 'Придира',
  class: 'pridira',
  stars: 4,
  images: ['pridira'],
  gradient: 'gradient-red',
  price: 150
};
const today = {
  name: 'Сегодня',
  class: 'today',
  stars: 1,
  images: ['today'],
  price: 150
};
const hat = {
  name: 'Шляпа',
  class: 'hat',
  images: ['hat'],
  service: true
};
const prophet = {
  name: 'Пророк',
  class: 'dayly_prophet',
  stars: 3,
  images: ['dayly_prophet'],
  price: 150
};
const moneyPlusH = {
  name: 'Бонус',
  class: 'add_money_h',
  images: ['add_money_h'],
  service: true
};
const moneyPlusV = {
  name: 'Бонус',
  class: 'add_money_v',
  images: ['add_money_v'],
  service: true
};
const grifindor = {
  name: 'Грифиндор',
  class: 'grifindor',
  stars: 2,
  images: ['grifindor'],
  price: 500
};
const wizzard = {
  name: 'Закли нание',
  class: 'wizzard',
  images: ['wizzard'],
  service: true
};

const damage = {
  name: 'Вредилки',
  class: 'vredilki',
  stars: 2,
  images: ['vredilki'],
  price: 300
};
const moneyMinusV = {
  name: 'Ущерб',
  class: 'give_money_v',
  images: ['give_money_v'],
  service: true
};
const moneyMinusH = {
  name: 'Ущерб',
  class: 'give_money_h',
  images: ['give_money_h'],
  service: true
};


const zonko = {
  name: 'Зонко',
  class: 'zonko',
  stars: 2,
  images: ['zonko'],
  price: 300
};

const gorbin = {
  name: 'Горбин и Бэркс',
  class: 'gorben',
  stars: 2,
  images: ['gorben'],
  price: 300
};

const azkaban = {
  isHideName: true,
  name: 'Азкабан',
  class: 'azkaban',
  images: ['dementor', 'azkaban'],
  square: true
};

const kingCross = {
  name: 'Кингс кросс',
  class: 'kingcross',
  stars: 1,
  images: ['kingcross'],
  price: 900
};

const magicDepartament = {
  name: 'Отдел магии',
  class: 'magic_departament',
  stars: 1,
  images: ['magic_departament'],
  price: 350
};

const transgressia = {
  name: 'Транс грессия',
  class: 'transgressia',
  stars: 1,
  images: ['transgressia'],
  price: 900
};

const secretDepartament = {
  name: 'Отдел тайн',
  class: 'secret_departament',
  stars: 1,
  images: ['secret_departament'],
  price: 350
};
const pufenduy = {
  name: 'Пуфендуй',
  class: 'pufenduy',
  stars: 1,
  images: ['pufenduy'],
  price: 500
};

const kogtevran = {
  name: 'Когтевран',
  class: 'kogtevran',
  stars: 1,
  images: ['kogtevran'],
  price: 500
};

const invisible = {
  name: 'Мантия невидимка',
  class: 'invisibleCoat',
  stars: 1,
  images: ['invisibleCoat'],
  price: 800
};

const grimm = {
  name: 'Площадь Гримма',
  class: 'square_grimm',
  stars: 1,
  images: ['square_grimm'],
  price: 450
};

const stick = {
  name: 'Старшая палочка',
  class: 'stick',
  stars: 1,
  images: ['stick'],
  price: 500
};

const kosoy = {
  name: 'Косой переулок',
  class: 'kosoy_pereulok',
  stars: 1,
  images: ['kosoy_pereulok'],
  price: 800
};

const hagrid = {
  isHideName: true,
  name: 'Хагрид',
  class: 'hagrid-square',
  images: ['revers', 'hagrid'],
  square: true
};

const sharmbatton = {
  name: 'Шарм баттон',
  class: 'sharmbautton',
  stars: 1,
  images: ['sharmbautton'],
  price: 700
};

const hogvarts = {
  name: 'Хогвартс',
  class: 'hogvards',
  stars: 1,
  images: ['hogvards'],
  price: 650
};

const durmstrang = {
  name: 'Дурм странг',
  class: 'durmstrang',
  stars: 1,
  images: ['durmstrang'],
  price: 650
};


const slizaren = {
  name: 'Слизарен',
  class: 'slizaren',
  stars: 1,
  images: ['slizaren'],
  price: 600
};

const revers = {
  name: 'Реверс',
  class: 'revers',
  images: ['revers'],
  service: true
};

const gobletFire = {
  name: 'Кубок огня',
  class: 'goblet_fire',
  stars: 1,
  images: ['goblet_fire'],
  price: 500
};

const sword = {
  name: 'Меч грифинд.',
  class: 'sword',
  stars: 1,
  images: ['sword'],
  price: 550
};

const stone = {
  name: 'Философ. камень',
  class: 'stone',
  stars: 1,
  images: ['stone'],
  price: 550
};

const quidich = {
  name: 'Квидич',
  class: 'quidich',
  images: ['quidich'],
  square: true
};


const topCards = [
  start,
  pridira,
  today,
  hat,
  prophet,
  moneyPlusV,
  grifindor,
  wizzard,
  damage,
  moneyMinusV,
  zonko,
  gorbin,
  azkaban
];
const leftCards = [
  kingCross,
  moneyMinusH,
  transgressia,
  pufenduy,
  invisible,
  stick
];
const rightCards = [
  magicDepartament,
  moneyPlusH,
  secretDepartament,
  kogtevran,
  grimm,
  kosoy
];


const bottomCards = [
  hagrid,
  sharmbatton,
  hogvarts,
  durmstrang,
  moneyPlusV,
  wizzard,
  slizaren,
  revers,
  gobletFire,
  moneyMinusV,
  sword,
  stone,
  quidich
];

const board = topCards.concat(rightCards, bottomCards, rightCards);

export default {
  topCards,
  leftCards,
  rightCards,
  bottomCards,
  board
};
