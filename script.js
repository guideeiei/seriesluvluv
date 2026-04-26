/* ========================================
   script.js — shared across all pages
   ======================================== */

/* ── FLOATING HEARTS ── */
(function spawnHearts() {
  const bg = document.getElementById('heartsBg');
  if (!bg) return;
  const shapes = ['♡', '♡', '♡', '·', '˚'];
  function spawn() {
    const el = document.createElement('span');
    el.className = 'heart-particle';
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (8 + Math.random() * 10) + 'px';
    const dur = 8 + Math.random() * 10;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = (Math.random() * dur) + 's';
    bg.appendChild(el);
    setTimeout(() => el.remove(), (dur + 2) * 1000);
  }
  for (let i = 0; i < 12; i++) spawn();
  setInterval(spawn, 1200);
})();

/* ── SPLASH → LOCK transition ── */
function goToLock() {
  const splash = document.getElementById('splashPage');
  const lock   = document.getElementById('lockPage');
  if (splash) splash.classList.add('hidden');
  if (lock)   lock.classList.add('visible');
}

/* ── PASSWORD / PIN ── */
let pin = '';
const CORRECT = '2541'; // ← change to her birth year

function addNum(n) {
  if (pin.length >= 4) return;
  pin += n;
  updateDots();
  if (pin.length === 4) setTimeout(checkPass, 180);
}

function clearPass() {
  pin = pin.slice(0, -1);
  updateDots();
  setMsg('');
}

function updateDots() {
  for (let i = 0; i < 4; i++) {
    const d = document.getElementById('d' + i);
    if (d) d.classList.toggle('filled', i < pin.length);
  }
}

function checkPass() {
  if (pin === CORRECT) {
    setMsg('');
    window.location.href = 'home.html';
  } else {
    setMsg('Try again 🥺');
    pin = '';
    updateDots();
  }
}

function setMsg(m) {
  const el = document.getElementById('lockMsg');
  if (el) el.textContent = m;
}
