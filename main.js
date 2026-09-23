const navItems = [
  { id: 'home', label: 'Home', number: '00' },
  { id: 'arsenal', label: 'Chimichangas', number: '01' },
  { id: 'comics', label: 'Comic Files', number: '02' },
  { id: 'fourth-wall', label: 'Fourth Wall', number: '03' },
  { id: 'gallery', label: 'Gallery', number: '04' },
];

const comicFiles = [
  ['Issue #01', 'The One Where He Talks To You', 'Plot: Deadpool notices the reader and immediately makes it everyone’s problem.'],
  ['Issue #02', 'Chimichanga Protocol', 'Plot: A snack run becomes a classified operation with deeply unnecessary explosions.'],
  ['Issue #03', 'Regeneration, Repetition, Regret', 'Plot: He heals from everything except a bad review and a slow loading spinner.'],
];

const badIdeas = [
  'A podcast where every episode is just Deadpool rating his own entrance music.',
  'A self-help book called You Can Heal Too, Probably.',
  'Replacing every website cursor with a tiny katana.',
  'A musical number about the tax implications of vigilante work.',
];

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell" id="site-shell">
    <header class="mobile-header">
      <button class="brand-button" data-scroll="home" aria-label="Go to top">DEADPOOL'S<br><span>CORNER</span></button>
      <button class="mobile-menu-button" id="mobile-menu-button" aria-expanded="false" aria-controls="mobile-nav">MENU</button>
    </header>

    <aside class="side-rail" aria-label="Primary navigation">
      <button class="rail-brand" data-scroll="home">
        <span class="eyebrow">THE UNAUTHORIZED</span>
        <strong>DEADPOOL'S</strong>
        <strong class="white-ink">CORNER</strong>
        <span class="issue-note">ISSUE 69 / STILL HEALING</span>
      </button>
      <div class="rail-label"><span></span> NAVIGATION, AGAINST MY WILL</div>
      <nav class="desktop-nav">
        ${navItems.map((item) => `<button data-scroll="${item.id}" data-nav="${item.id}"><span>${item.label}</span><small>${item.number}</small></button>`).join('')}
      </nav>
      <div class="rail-warning">WARNING: THIS RAIL HAS OPINIONS.<br />SCROLL AT YOUR OWN RISK.</div>
    </aside>

    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
      ${navItems.map((item) => `<button data-scroll="${item.id}" data-nav="${item.id}"><span>${item.label}</span><small>${item.number}</small></button>`).join('')}
    </nav>

    <main class="comic-page">
      <section class="hero panel-section" id="home">
        <div class="splat splat-red" aria-hidden="true"></div>
        <div class="top-caption"><span class="red-square"></span> CLASSIFIED FAN-SITE / TOTALLY NOT OFFICIAL / PLEASE DON'T SUE</div>
        <div class="live-stamp">LIVE FROM<br /><b>SOMEWHERE LEGALLY VAGUE</b></div>
        <div class="hero-copy">
          <p class="kicker">WELCOME, TRUE BELIEVERS... &amp; STALKERS!</p>
          <h1>SERIOUSLY,<br /><em>DON'T CLICK</em><br />ANYTHING.</h1>
          <div class="hero-note"><span class="alert-mark">!</span> EVERYTHING HERE IS HELD TOGETHER BY SPITE, SWORDS, AND ONE VERY CONFUSED HEALING FACTOR.</div>
        </div>
        <div class="hero-actions">
          <button class="gag-button" id="gag-button">
            <span class="tag">TOP SECRET // DO NOT READ</span>
            NO, I'M NOT HERE. STOP LOOKING. I'M IN A DEADPOOL COMIC SOMEWHERE.
            <span class="hidden-mark" id="hidden-mark">[ tiny unicorn hired as legal counsel ]</span>
          </button>
          <div class="hero-side-actions">
            <div class="burst">SCROLL DOWN,<br />COWARD.</div>
            <button class="dark-button" data-wall-break>PRESS THE SUSPICIOUS BUTTON <span>↘</span></button>
          </div>
        </div>
        <div class="margin-note">↘ THE PAGE CONTINUES BECAUSE DEADPOOL HAS UNRESOLVED ISSUES</div>
      </section>

      <div class="marquee" aria-label="Deadpool marquee">
        <div class="marquee-track" id="marquee-track"></div>
      </div>

      <section class="arsenal panel-section dark-section" id="arsenal">
        <div class="content-wrap">
          <div class="section-stamp"><b>01</b><span>THE ONLY RELIABLE FOOD GROUP</span></div>
          <div class="split-layout">
            <div>
              <h2>CHIMI<br /><em>CHANGA</em><br />PROTOCOL</h2>
              <p class="mono-copy">A deeply scientific reading of Wade Wilson's emergency snack reserves. Every click makes the situation less medically advisable and considerably more delicious.</p>
            </div>
            <div class="counter-card">
              <span class="corner-label">CLASSIFIED SNACK DATA</span>
              <div class="card-heading"><span>CURRENT SUPPLY</span><strong id="chimi-count">8</strong></div>
              <div class="meter"><div id="chimi-meter"></div></div>
              <div class="meter-labels"><span>EMPTY-ISH</span><span>UNREASONABLE</span></div>
              <div class="counter-controls">
                <button class="square-button" id="chimi-minus" aria-label="Remove a chimichanga">−</button>
                <button class="yellow-button" id="chimi-add">+ ADD ANOTHER</button>
              </div>
              <p class="fine-print">* Clicking is not eating. Wade would like to clarify this for insurance reasons.</p>
            </div>
          </div>
          <div class="arsenal-strip">
            <div class="mask-illustration" aria-label="CSS illustration of a Deadpool mask" role="img"><span></span><i></i><b></b></div>
            <div><p class="label-red">FIELD NOTE 04-B</p><p class="quote">“I may be crazy, but at least my costume has a color scheme.”</p></div>
            <div class="side-stat"><span>REGENERATION</span><strong>99.9%</strong></div>
          </div>
        </div>
      </section>

      <section class="comics panel-section" id="comics">
        <div class="content-wrap">
          <div class="section-stamp"><b>02</b><span>ARCHIVED COMIC FILES / DO NOT LEND</span></div>
          <div class="section-intro">
            <h2>THE <em>COMIC</em><br />FILES</h2>
            <p class="margin-copy">A totally unofficial reading list for the Merc with a Mouth. No spoilers, except the ones we just made up.</p>
          </div>
          <div class="comic-grid">
            ${comicFiles.map((comic, index) => `
              <article class="comic-card ${index === 1 ? 'tilted-card' : ''}">
                <div class="comic-art art-${index + 1}">
                  <span class="issue-burst">${index === 1 ? 'BAM!' : index === 2 ? 'WHAM!' : 'SNIKT!'}</span>
                  <div class="mini-mask"><span></span><i></i></div>
                  <b>${index === 0 ? 'HEY, READER.' : index === 1 ? 'MORE CHIMI.' : 'I HEAL.'}</b>
                </div>
                <div class="comic-meta"><span>${comic[0]}</span><span>UNOFFICIAL</span></div>
                <h3>${comic[1]}</h3>
                <p>${comic[2]}</p>
                <button class="read-button" data-read="${index}">READ THE NON-SPOILER <span>→</span></button>
              </article>
            `).join('')}
          </div>
          <div class="bad-ideas-wrap">
            <div>
              <p class="label-red">DEADPOOL'S NOTEBOOK / PAGE 404</p>
              <h3>BAD IDEAS<br /><em>THAT MIGHT WORK</em></h3>
            </div>
            <div class="idea-list">
              ${badIdeas.map((idea, index) => `<button class="idea-button" data-idea="${index}"><b>0${index + 1}</b><span>${idea}</span><strong>+</strong></button>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="wall-section panel-section" id="fourth-wall">
        <div class="content-wrap">
          <div class="section-stamp"><b>03</b><span>STRUCTURAL SARCASM / DO NOT TAMPER</span></div>
          <div class="split-layout">
            <div>
              <h2>THE<br /><em>FOURTH</em><br />WALL</h2>
              <p class="mono-copy">It was load-bearing. Deadpool knows you are reading this. He would like the royalties, a chimichanga, or both.</p>
            </div>
            <div class="control-card">
              <div class="control-top"><div><p class="label-red">CONTROL PANEL 03-B</p><h3>SARCASM SETTINGS</h3></div><span class="lock-icon">LOCKED</span></div>
              <div class="control-row"><div><b>SARCASM INTENSITY</b><small>Locked on. Obviously.</small></div><button class="toggle" id="sarcasm-toggle" aria-label="Sarcasm is locked on"><span>ON</span><i></i></button></div>
              <p class="error-message" id="sarcasm-message" aria-live="polite"></p>
              <button class="wall-button" data-wall-break>BREAK THE FOURTH WALL <span>✕</span></button>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery panel-section" id="gallery">
        <div class="content-wrap">
          <div class="section-stamp"><b>04</b><span>EVIDENCE LOCKER / SUSPICIOUSLY EMPTY</span></div>
          <div class="section-intro">
            <h2>THE <em>GALLERY</em></h2>
            <div class="red-note">NO STOCK PHOTOGRAPHY WAS HARMED IN THE MAKING OF THIS FAN PAGE.</div>
          </div>
          <div class="loading-box">
            <div class="loading-mark" id="loading-mark"><span></span></div>
            <h3 id="gallery-status">LOADING DEADPOOL GALLERY...</h3>
            <p>BLAME YOUR INTERNET PROVIDER. OR MINE. HONESTLY, BOTH ARE SUSPICIOUS.</p>
            <button class="retry-button" id="gallery-retry">↻ TRY AGAIN <span id="retry-count"></span></button>
          </div>
          <div class="file-grid">
            ${['masked-selfie.jpg', 'Definitely-not-Wade.png', 'red-suit-final-final.psd'].map((file, index) => `<article class="file-card ${index === 1 ? 'yellow-card' : ''}"><div class="file-art"><span>${index === 0 ? 'NOPE.' : index === 1 ? 'NOPE.' : 'REDACTED'}</span></div><b>${file}</b><small>STATUS: NEVER EXISTED</small></article>`).join('')}
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="content-wrap">
          <div class="footer-grid">
            <div><p class="label-yellow">END OF ISSUE 69 / PROBABLY</p><h2>GO HOME.<br /><em>YOU SAW NOTHING.</em></h2></div>
            <div class="safety-box"><span class="safety-icon">X</span><h3>100% UNSAFE.<br />PROCEED WITH CAUTION.</h3><p>Family-friendly browsing has been crossed out for your protection.</p></div>
            <div class="status-box"><span>THE DEADPOOL STATUS BARS</span><div><b>CHIMICHANGA</b><i><em id="footer-chimi"></em></i></div><div><b>REGENERATION</b><i><em id="footer-regen"></em></i></div></div>
          </div>
          <div class="copyright"><span>© 2026 WE DON'T OWN ANYTHING. DON'T SUE US, WE'RE BROKE.</span><span>FAN-MADE / NOT AFFILIATED / BUILT WITH CSS AND BAD DECISIONS</span></div>
        </div>
      </footer>
    </main>

    <div class="wall-modal" id="wall-modal" role="dialog" aria-modal="true" aria-labelledby="wall-title" hidden>
      <div class="modal-card">
        <p class="label-yellow">MESSAGE FROM BEHIND THE PAGE</p>
        <h2 id="wall-title">HEY.</h2>
        <p>You clicked the thing. Deadpool noticed. The page is now pretending this was your idea.</p>
        <button class="yellow-button" id="close-wall">PUT IT BACK</button>
      </div>
    </div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <button class="back-top" data-scroll="home" aria-label="Back to top">↑</button>
  </div>
`;

const shell = document.querySelector('#site-shell');
const toast = document.querySelector('#toast');
let chimichangas = 8;
let hype = 64;
let retryCount = 0;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 4200);
}

function playSigh() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(175, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(76, context.currentTime + 0.42);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.04, context.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.48);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.5);
  } catch {
    // The sigh is a bonus. The page does not depend on it.
  }
}

function updateChimichangas() {
  document.querySelector('#chimi-count').textContent = chimichangas;
  document.querySelector('#chimi-meter').style.width = `${Math.min(100, 42 + chimichangas * 4)}%`;
  document.querySelector('#footer-chimi').style.width = `${Math.min(100, 30 + chimichangas * 3)}%`;
}

function updateHype() {
  document.querySelector('#footer-regen').style.width = `${Math.max(10, hype)}%`;
}

function scrollToSection(id) {
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (id === 'home') playSigh();
  document.querySelector('#mobile-nav').classList.remove('open');
  document.querySelector('#mobile-menu-button').setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (event) => {
  const scrollTarget = event.target.closest('[data-scroll]');
  if (scrollTarget) scrollToSection(scrollTarget.dataset.scroll);

  if (event.target.closest('[data-wall-break]')) {
    document.querySelector('#wall-modal').hidden = false;
    shell.classList.add('wall-breaking');
  }

  const idea = event.target.closest('[data-idea]');
  if (idea) {
    hype = hype >= 100 ? 16 : Math.min(100, hype + 9);
    updateHype();
    idea.classList.add('idea-hit');
    window.setTimeout(() => idea.classList.remove('idea-hit'), 500);
    showToast('BAD IDEA LOGGED. YOUR HYPE METER HAS BEEN COMPROMISED.');
  }

  const readButton = event.target.closest('[data-read]');
  if (readButton) {
    const item = comicFiles[Number(readButton.dataset.read)];
    showToast(`${item[0]}: ${item[2]}`);
  }
});

document.querySelector('#close-wall').addEventListener('click', () => {
  document.querySelector('#wall-modal').hidden = true;
  shell.classList.remove('wall-breaking');
});

document.querySelector('#mobile-menu-button').addEventListener('click', (event) => {
  const menu = document.querySelector('#mobile-nav');
  const isOpen = menu.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});

document.querySelector('#gag-button').addEventListener('mouseenter', () => {
  document.querySelector('#hidden-mark').classList.add('revealed');
});
document.querySelector('#gag-button').addEventListener('click', () => {
  const button = document.querySelector('#gag-button');
  document.querySelector('#hidden-mark').classList.add('revealed');
  button.classList.remove('wiggle');
  window.requestAnimationFrame(() => button.classList.add('wiggle'));
  showToast('YOU FOUND THE HIDDEN LEGAL DEPARTMENT. IT IS A UNICORN.');
});

document.querySelector('#chimi-minus').addEventListener('click', () => {
  chimichangas = Math.max(0, chimichangas - 1);
  updateChimichangas();
});
document.querySelector('#chimi-add').addEventListener('click', () => {
  chimichangas = Math.min(24, chimichangas + 1);
  updateChimichangas();
  showToast('CHIMICHANGA ADDED. THIS IS NOT A NUTRITIONAL RECOMMENDATION.');
});

document.querySelector('#sarcasm-toggle').addEventListener('click', () => {
  document.querySelector('#sarcasm-message').textContent = 'ERROR: FEATURE CANNOT BE DISABLED. SARCASM IS STRUCTURAL TO THIS DOMAIN.';
});

document.querySelector('#gallery-retry').addEventListener('click', () => {
  retryCount += 1;
  document.querySelector('#retry-count').textContent = `(${retryCount})`;
  const status = document.querySelector('#gallery-status');
  const mark = document.querySelector('#loading-mark');
  status.textContent = retryCount % 2 ? 'STILL LOADING DEADPOOL GALLERY...' : 'FINE. BLAME THE INTERNET.';
  mark.classList.toggle('stopped', retryCount % 2 === 0);
});

document.querySelector('#marquee-track').innerHTML = Array.from({ length: 4 }, () => `<span>STILL A BETTER WEBSITE THAN 'ORIGINS.' <b>*</b></span>`).join('');

const sections = navItems.map((item) => document.querySelector(`#${item.id}`));
const navObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  document.querySelectorAll('[data-nav]').forEach((button) => button.classList.toggle('active', button.dataset.nav === visible.target.id));
}, { rootMargin: '-18% 0px -68% 0px', threshold: [0.05, 0.25, 0.6] });
sections.forEach((section) => section && navObserver.observe(section));

updateChimichangas();
updateHype();
