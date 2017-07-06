import test from 'ava';
import sinon from 'sinon';
import { mount, tick } from '@/../test/helpers';
import Card Description from './index';

test('renders', async t => {
  const name = 'hello world';

  // holder - jQuery wrapper
  const {vm, holder} = mount(Card Description, {name});

  t.is(vm.name, name);
  t.is(vm.$el.textContent, `Card Description - ${name}`);
  t.is(holder.html(), `Card Description - ${name}`);
  t.is(holder.attr('class'), 'Card Description-class');

  holder.click();
  await tick(); // rerender

  holder.debug('its a dom');

  t.is(vm.name, newName);
  t.is(vm.$el.textContent, `Card Description - ${newName}`);
  t.is(holder.html(), `Card Description - ${newName}`);

});