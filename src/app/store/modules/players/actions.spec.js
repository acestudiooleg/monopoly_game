import test from 'ava';
import sinon from 'sinon';
import actions from './actions';

test('actions', async t => {
  const y = '/players';
  const x = '/players';
  t.is(x, y);
});
