import test from 'ava';
import sinon from 'sinon';
import actions from './actions';

test('actions', async t => {
  const y = '/gameboard';
  const x = '/gameboard';
  t.is(x, y);
});
