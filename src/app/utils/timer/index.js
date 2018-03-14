const timer = {
  clock: null
};

export const runTimer = (callback) => {
  timer.clock = setInterval(callback, 1000);
};

export const stopTimer = () => {
  if (timer.clock) {
    clearInterval(timer.clock);
  }
};

export default {
  runTimer,
  stopTimer
};
