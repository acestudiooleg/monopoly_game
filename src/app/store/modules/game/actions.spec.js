import test from 'ava';
import sinon from 'sinon';
import actions from './actions';

test('actions', async t => {
  const y = '/game';
  const x = '/game';
  t.is(x, y);
});
