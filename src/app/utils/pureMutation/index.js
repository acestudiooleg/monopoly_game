export const each = iterator => (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = iterator(obj[key], key);
  });
  return newObj;
};

export default each((module) => {
  module.mutations = each(mutation => ((state, payload) => {
    const result = mutation(state, payload);
    if (result) {
      if (state instanceof Array) {
        state.splice(0, state.length);
      }
      each((x, key) => (state[key] = x))(result);
    }
  }))(module.mutations);
  return module;
});
