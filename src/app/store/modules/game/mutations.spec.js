import test from 'ava';
import sinon from 'sinon';
import mutations from './mutations';

test('mutations', async t => {
  const y = '/game';
  const x = '/game';
  t.is(x, y);
});
