import test from 'ava';
import sinon from 'sinon';
import { mount, tick } from '@/../test/helpers';
import Players from './index';

test('renders', async t => {
  const name = 'hello world';

  // holder - jQuery wrapper
  const {vm, holder} = mount(Players, {name});

  t.is(vm.name, name);
  t.is(vm.$el.textContent, `Players - ${name}`);
  t.is(holder.html(), `Players - ${name}`);
  t.is(holder.attr('class'), 'Players-class');

  holder.click();
  await tick(); // rerender

  holder.debug('its a dom');

  t.is(vm.name, newName);
  t.is(vm.$el.textContent, `Players - ${newName}`);
  t.is(holder.html(), `Players - ${newName}`);

});