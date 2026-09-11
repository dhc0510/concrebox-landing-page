import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/theme-init.js', import.meta.url), 'utf8');
function boot(saved, systemDark = false, denied = false) {
  const window = new EventTarget();
  const media = new EventTarget();
  media.matches = systemDark;
  window.matchMedia = () => media;
  const root = { dataset: {} };
  const meta = {};
  const storage = new Map([['concrebox-theme', saved]]);
  vm.runInNewContext(source, {
    window, Event, setTimeout, clearTimeout,
    document: { documentElement: root, querySelector: () => meta },
    localStorage: {
      getItem: key => { if (denied) throw Error('denied'); return storage.get(key); },
      setItem: (key, value) => { if (denied) throw Error('denied'); storage.set(key, value); },
    },
  });
  return {
    root, meta, storage,
    system(dark) { media.matches = dark; media.dispatchEvent(new Event('change')); },
    send(type, properties) { const event = new Event(type); Object.assign(event, properties); window.dispatchEvent(event); },
  };
}
for (const dark of [false, true]) {
  const page = boot(null, dark);
  assert.equal(page.root.dataset.theme, dark ? 'dark' : 'light');
  page.system(!dark);
  assert.equal(page.root.dataset.theme, dark ? 'light' : 'dark');
}
for (const saved of ['light', 'dark']) {
  const page = boot(saved, saved === 'light');
  assert.equal(page.root.dataset.theme, saved);
  page.system(saved !== 'light');
  assert.equal(page.root.dataset.theme, saved);
}
const page = boot(null);
assert.equal(page.root.dataset.themeTransition, undefined, 'No animation on initial load');
page.send('concrebox-theme-select', { detail: 'dark' });
assert.equal(page.root.dataset.themeTransition, 'true');
assert.equal(page.root.dataset.theme, 'dark');
assert.equal(page.storage.get('concrebox-theme'), 'dark');
assert.equal(page.meta.content, '#111310');
page.system(false);
assert.equal(page.root.dataset.theme, 'dark');
page.send('concrebox-theme-select', { detail: 'invalid' });
assert.equal(page.root.dataset.theme, 'dark');
page.send('storage', { key: 'concrebox-theme', newValue: 'light' });
assert.equal(page.root.dataset.theme, 'light');
page.send('storage', { key: null, newValue: null });
page.system(true);
assert.equal(page.root.dataset.theme, 'dark');
const denied = boot(null, true, true);
denied.send('concrebox-theme-select', { detail: 'light' });
assert.equal(denied.root.dataset.theme, 'light');
assert.equal(boot('invalid', true).root.dataset.theme, 'dark');
console.log('Theme checks passed: system preference, persistence, selection, cross-tab sync, invalid values and unavailable storage.');
await new Promise(resolve => setTimeout(resolve, 350));
assert.equal(page.root.dataset.themeTransition, undefined, 'Restore normal transitions after switching');
