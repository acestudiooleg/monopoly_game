import test from 'ava';
import sinon from 'sinon';
import mutations from './mutations';

test('mutations', async t => {
  const y = '/players';
  const x = '/players';
  t.is(x, y);
});
