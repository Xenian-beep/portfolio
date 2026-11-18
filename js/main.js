// Footer year updates itself
document.getElementById('year').textContent = new Date().getFullYear();

// Theme button: cycles light -> dark -> back to your device setting, and remembers the choice
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}
  btn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : current === 'dark' ? null : 'light';
    if (next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
    try { next ? localStorage.setItem('theme', next) : localStorage.removeItem('theme'); } catch (e) {}
  });
})();

// XP bar (right side, wide screens only): fills as you scroll down the page, level goes up every 20%
(function () {
  var fill = document.getElementById('xp-fill');
  var pctEl = document.getElementById('xp-pct');
  var lvlEl = document.getElementById('xp-level');
  if (!fill) return;
  var ticking = false;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
    fill.style.setProperty('--xp', pct);
    pctEl.textContent = pct;
    lvlEl.textContent = 'LVL ' + (pct >= 100 ? 5 : 1 + Math.floor(pct / 20));
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();