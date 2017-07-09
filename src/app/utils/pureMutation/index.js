export const each = iterator => (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = iterator(obj[key], key);
  });
  return newObj;
};

export const fromArrayToObject = array => {
  if (array instanceof Array) {
    const obj = {};
    array.forEach(el => {
      obj[el[0]] = el[1];
    });
    return obj;
  }

  return array;
};

export const creaceMethodChangeItemInList = (arrayName = 'list') => (cb, criteria = 'id') => (state, payload) => {
  state[arrayName] = state[arrayName].map(el => {
    const x = payload instanceof Object ? payload[criteria] : payload;
    if (el[criteria] === x) {
      const result = cb(el, payload, state);
      return {...el, ...result };
    }
    return el;
  });
};

export const transformMutations = each(mutation => ((state, payload) => {
  const result = mutation(state, payload);
  if (result) {
    if (state instanceof Array) {
      state.splice(0, state.length);
    }
    each((x, key) => (state[key] = x))(result);
  }
}));


export default each((module) => {
  module.mutations = transformMutations(fromArrayToObject(module.mutations));
  return module;
});
