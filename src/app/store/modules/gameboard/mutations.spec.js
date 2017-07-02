import test from 'ava';
import sinon from 'sinon';
import mutations from './mutations';

test('mutations', async t => {
  const y = '/gameboard';
  const x = '/gameboard';
  t.is(x, y);
});
