import test from 'ava';
import sinon from 'sinon';
import { mount, tick } from '@/../test/helpers';
import Chat from './index';

test('renders', async t => {
  const name = 'hello world';

  // holder - jQuery wrapper
  const {vm, holder} = mount(Chat, {name});

  t.is(vm.name, name);
  t.is(vm.$el.textContent, `Chat - ${name}`);
  t.is(holder.html(), `Chat - ${name}`);
  t.is(holder.attr('class'), 'Chat-class');

  holder.click();
  await tick(); // rerender

  holder.debug('its a dom');

  t.is(vm.name, newName);
  t.is(vm.$el.textContent, `Chat - ${newName}`);
  t.is(holder.html(), `Chat - ${newName}`);

});