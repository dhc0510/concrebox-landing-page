(function () {
  var key = 'concrebox-theme';
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var preference = null;
  try { preference = localStorage.getItem(key); } catch { /* Storage can be unavailable. */ }
  function apply(value) {
    document.documentElement.dataset.theme = value;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = value === 'dark' ? '#111310' : '#f8f8f6';
    window.dispatchEvent(new Event('concrebox-theme-change'));
  }
  function resolve() {
    apply(preference === 'light' || preference === 'dark' ? preference : media.matches ? 'dark' : 'light');
  }
  window.addEventListener('concrebox-theme-select', function (event) {
    if (event.detail !== 'light' && event.detail !== 'dark') return;
    preference = event.detail;
    try { localStorage.setItem(key, preference); } catch { /* Keep the current session working. */ }
    resolve();
  });
  window.addEventListener('storage', function (event) {
    if (event.key === key || event.key === null) { preference = event.newValue; resolve(); }
  });
  media.addEventListener('change', resolve);
  resolve();
})();
