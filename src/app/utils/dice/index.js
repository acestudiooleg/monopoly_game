export const random = (num) => Math.floor(Math.random() * num) + 1;

export const rollDice = () => {
  const one = random(6);
  const sec = random(6);
  const total = one + sec;
  return { one, sec, total };
};

export default {
  rollDice,
  random
};
