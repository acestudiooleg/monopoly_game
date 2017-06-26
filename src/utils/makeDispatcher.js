import store from '../store';

export default (ns, events) => {
  if (typeof events === 'string') {
    return {[events]: payload => store.dispatch(`${ns}/${events}`, payload)};
  }
  const nd = {};
  events.forEach((e) => {
    nd[e] = payload => store.dispatch(`${ns}/${e}`, payload);
  });
  return nd;
};
