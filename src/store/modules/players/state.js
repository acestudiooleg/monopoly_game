/* ============
 * State of the account module
 * ============
 *
 * The initial state of the account module.
 */

const Oleg = {
  color: 'green',
  name: 'Oleg',
  isActive: true,
  position: 1,
};

const Alena = {
  color: 'red',
  name: 'Alena',
  isActive: false,
  position: 1,
};

const Tolik = {
  color: 'blue',
  name: 'Tolik',
  isActive: false,
  position: 1,
};

export default {
  list: [Oleg, Alena, Tolik].map((el, i) => ({ ...el, id: i + 1 })),
};
