const timer = {};
import store from '@/store';


export const runTimer = (id) => {
  timer[id] = setInterval(() => {
    store.dispatch('players/minusSecond', id);
  }, 1000);
};

export const stopTimer = (id) => {
  if (timer[id]) {
    clearInterval(timer[id]);
  }
  store.dispatch('players/resetTimeout', id);
};

export default {
  runTimer,
  stopTimer
};
