/* ===================================================
   ACS LEGAL — app.js
   Interaktywność, dane, komponenty UI
   =================================================== */

/* ============ DATA ============ */
const LAWYERS = [
  { id: 1, name: 'dr Marta Kowalska', title: 'Radca prawny', city: 'warszawa', specs: ['frankowe', 'gospodarcze'], avatar: '👩‍⚖️', bio: 'Specjalistka w sprawach frankowych, 12 lat doświadczenia.' },
  { id: 2, name: 'adw. Tomasz Wiśniewski', title: 'Adwokat', city: 'warszawa', specs: ['karne', 'odszkodowania'], avatar: '👨‍⚖️', bio: 'Obrona karna i sprawy odszkodowawcze, były prokurator.' },
  { id: 3, name: 'r.pr. Anna Jabłońska', title: 'Radca prawny', city: 'warszawa', specs: ['rodzinne', 'nieruchomosci'], avatar: '👩‍⚖️', bio: 'Prawo rodzinne i nieruchomości, mediator sądowy.' },
  { id: 4, name: 'adw. Piotr Nowak', title: 'Adwokat', city: 'gdansk', specs: ['gospodarcze', 'pracy'], avatar: '👨‍⚖️', bio: 'Prawo gospodarcze, spółki i prawo pracy.' },
  { id: 5, name: 'r.pr. Katarzyna Zając', title: 'Radca prawny', city: 'gdansk', specs: ['frankowe', 'odszkodowania'], avatar: '👩‍⚖️', bio: 'Sprawy frankowe i wypadkowe – 8 lat w sądach.' },
  { id: 6, name: 'adw. Marek Lewandowski', title: 'Adwokat', city: 'torun', specs: ['karne', 'rodzinne'], avatar: '👨‍⚖️', bio: 'Obrona w sprawach karnych i prawo rodzinne.' },
  { id: 7, name: 'r.pr. Agnieszka Dąbrowska', title: 'Radca prawny', city: 'radom', specs: ['gospodarcze', 'pracy'], avatar: '👩‍⚖️', bio: 'Obsługa firm, prawo pracy i zamówienia publiczne.' },
  { id: 8, name: 'adw. Rafał Szymański', title: 'Adwokat', city: 'slupsk', specs: ['nieruchomosci', 'odszkodowania'], avatar: '👨‍⚖️', bio: 'Nieruchomości, prawo budowlane i odszkodowania.' },
  { id: 9, name: 'r.pr. Monika Kamińska', title: 'Radca prawny', city: 'warszawa', specs: ['pracy', 'gospodarcze'], avatar: '👩‍⚖️', bio: 'Prawo pracy, RODO i ochrona danych osobowych.' },
  { id: 10, name: 'adw. Łukasz Wojciechowski', title: 'Adwokat', city: 'gdansk', specs: ['rodzinne', 'frankowe'], avatar: '👨‍⚖️', bio: 'Sprawy rodzinne i kredyty frankowe w Trójmieście.' },
  { id: 11, name: 'r.pr. Izabela Krawczyk', title: 'Radca prawny', city: 'torun', specs: ['nieruchomosci', 'gospodarcze'], avatar: '👩‍⚖️', bio: 'Prawo nieruchomości i obsługa spółek.' },
  { id: 12, name: 'adw. Grzegorz Malinowski', title: 'Adwokat', city: 'radom', specs: ['karne', 'odszkodowania'], avatar: '👨‍⚖️', bio: 'Obrona karna i sprawy o odszkodowanie.' },
];

const SPEC_LABELS = {
  frankowe: 'Sprawy frankowe',
  odszkodowania: 'Odszkodowania',
  rodzinne: 'Prawo rodzinne',
  gospodarcze: 'Prawo gospodarcze',
  pracy: 'Prawo pracy',
  nieruchomosci: 'Nieruchomości',
  karne: 'Prawo karne',
};

const CITY_LABELS = {
  warszawa: 'Warszawa',
  gdansk: 'Gdańsk',
  torun: 'Toruń',
  radom: 'Radom',
  slupsk: 'Słupsk',
};

const PRICING_DATA = {
  individual: [
    { service: 'Konsultacja prawna (60 min)', price: 'BEZPŁATNA', note: 'Pierwsza wizyta' },
    { service: 'Analiza umowy kredytowej (frankowej)', price: '299 – 499 zł', note: '' },
    { service: 'Pozew sądowy – przygotowanie', price: 'od 1 500 zł', note: '' },
    { service: 'Reprezentacja w sądzie I inst.', price: 'od 2 500 zł', note: 'Lub % od wartości sporu' },
    { service: 'Sprawa o alimenty', price: 'od 1 200 zł', note: '' },
    { service: 'Pozew o rozwód (bez orzekania o winie)', price: 'od 2 000 zł', note: '' },
    { service: 'Pozew o rozwód (z orzekaniem o winie)', price: 'od 3 500 zł', note: '' },
    { service: 'Podział majątku', price: 'od 2 000 zł', note: 'Zależy od składu majątku' },
    { service: 'Sprawa spadkowa', price: 'od 1 500 zł', note: '' },
    { service: 'Odszkodowanie z OC sprawcy', price: 'Wynagrodzenie od sukcesu', note: 'Bez opłat z góry' },
    { service: 'Apelacja', price: 'od 1 500 zł', note: '' },
    { service: 'Ugoda / mediacja', price: 'od 800 zł', note: '' },
  ],
  business: [
    { service: 'Konsultacja dla firm (60 min)', price: 'BEZPŁATNA', note: 'Pierwsza wizyta' },
    { service: 'Przygotowanie umowy handlowej', price: 'od 500 zł', note: '' },
    { service: 'Opinia prawna', price: 'od 400 zł', note: 'W zależności od złożoności' },
    { service: 'Regulamin pracy / wynagradzania', price: 'od 1 200 zł', note: '' },
    { service: 'Due diligence prawne', price: 'od 3 000 zł', note: 'Zależy od zakresu' },
    { service: 'Rejestracja spółki z o.o.', price: 'od 1 800 zł', note: '+ opł. sądowe' },
    { service: 'Przekształcenie spółki', price: 'od 4 000 zł', note: '' },
    { service: 'Windykacja (postępowanie sądowe)', price: 'od 1 200 zł', note: '+ % od odzyskanej kwoty' },
    { service: 'Reprezentacja w sporze sądowym (B2B)', price: 'od 3 500 zł', note: '' },
    { service: 'Odwołanie do KIO (przetargi)', price: 'od 4 000 zł', note: '' },
    { service: 'Godzinowa stawka radcy / adwokata', price: '350 – 600 zł/h', note: 'Bez abonamentu' },
    { service: 'Abonament firmowy BUSINESS', price: 'od 1 999 zł/mies.', note: '15h + sąd' },
  ],
  frankowe: [
    { service: 'Bezpłatna analiza umowy', price: 'BEZPŁATNA', note: 'Zawsze gratis' },
    { service: 'Wniosek o zabezpieczenie roszczenia', price: 'od 800 zł', note: '' },
    { service: 'Pozew o unieważnienie umowy (I inst.)', price: 'od 4 000 zł', note: '' },
    { service: 'Model wynagrodzenia "success fee"', price: '5 – 15%', note: 'Od odzyskanej kwoty' },
    { service: 'Reprezentacja do prawomocnego wyroku', price: 'Ryczałt indywidualny', note: 'Wycena po analizie' },
    { service: 'Odfrankowienie bez unieważnienia', price: 'od 2 500 zł', note: '' },
    { service: 'Ugoda z bankiem – negocjacje', price: 'od 1 000 zł', note: '' },
    { service: 'Apelacja / kasacja w sprawach frankowych', price: 'od 2 000 zł', note: '' },
  ]
};

const TEMPLATES = [
  { id: 1, title: 'Pozew o alimenty', cat: 'sadowe', icon: '⚖', desc: 'Wzór pozwu o zasądzenie alimentów na dziecko / małżonka.' },
  { id: 2, title: 'Wniosek o zabezpieczenie alimentów', cat: 'sadowe', icon: '🛡', desc: 'Zabezpieczenie alimentacyjne na czas trwania procesu.' },
  { id: 3, title: 'Pozew o rozwód bez orzekania o winie', cat: 'rodzinne', icon: '📋', desc: 'Standardowy wzór pozwu o rozwód za porozumieniem stron.' },
  { id: 4, title: 'Pozew o rozwód z orzekaniem o winie', cat: 'rodzinne', icon: '📋', desc: 'Pozew o rozwód z wnioskiem o orzeczenie wyłącznej winy.' },
  { id: 5, title: 'Wniosek o uregulowanie kontaktów z dzieckiem', cat: 'rodzinne', icon: '👨‍👧', desc: 'Wniosek o ustalenie harmonogramu kontaktów rodzica z dzieckiem.' },
  { id: 6, title: 'Umowa zlecenia', cat: 'umowy', icon: '📄', desc: 'Wzór umowy zlecenia zgodny z Kodeksem cywilnym.' },
  { id: 7, title: 'Umowa o dzieło', cat: 'umowy', icon: '📄', desc: 'Wzór umowy o dzieło z określeniem wynagrodzenia i rezultatu.' },
  { id: 8, title: 'Umowa NDA (poufność)', cat: 'firmowe', icon: '🔒', desc: 'Umowa o zachowaniu poufności dla firm i współpracowników.' },
  { id: 9, title: 'Wniosek o upadłość konsumencką', cat: 'sadowe', icon: '⚖', desc: 'Wniosek o ogłoszenie upadłości osoby fizycznej nieprowadzącej dział. gosp.' },
  { id: 10, title: 'Reklamacja do banku (franki)', cat: 'frankowe', icon: '🏦', desc: 'Wzór reklamacji do banku w sprawie umowy kredytu frankowego.' },
  { id: 11, title: 'Wezwanie do zapłaty', cat: 'firmowe', icon: '💶', desc: 'Przedsądowe wezwanie do zapłaty dla dłużnika.' },
  { id: 12, title: 'Pełnomocnictwo ogólne', cat: 'umowy', icon: '🤝', desc: 'Wzór pełnomocnictwa ogólnego do reprezentowania przed sądami i urzędami.' },
  { id: 13, title: 'Pozew o odszkodowanie (wypadek)', cat: 'sadowe', icon: '⚖', desc: 'Wzór pozwu o zasądzenie odszkodowania za wypadek komunikacyjny.' },
  { id: 14, title: 'Wniosek o podział majątku', cat: 'rodzinne', icon: '🏠', desc: 'Wniosek o sądowy podział majątku wspólnego po ustaniu małżeństwa.' },
  { id: 15, title: 'Umowa przedwstępna sprzedaży nieruchomości', cat: 'umowy', icon: '🏘', desc: 'Wzór umowy przedwstępnej z zadatkiem i terminem.' },
  { id: 16, title: 'Zawiadomienie do prokuratury', cat: 'sadowe', icon: '📋', desc: 'Wzór zawiadomienia o popełnieniu przestępstwa do prokuratury.' },
];

const BLOG_POSTS = [
  {
    id: 1, featured: true,
    title: 'Frankowicze 2025: co po wyroku TSUE? Kompletny przewodnik',
    tag: 'Sprawy frankowe', date: '14 stycznia 2025',
    excerpt: 'Wyjaśniamy najnowsze orzeczenia Trybunału Sprawiedliwości UE i polskich sądów w sprawach frankowych. Co to oznacza dla Twojej umowy kredytowej?',
    icon: '⚖️'
  },
  {
    id: 2, featured: false,
    title: 'Jak prawidłowo rozwiązać umowę o pracę – prawa pracownika w 2025 r.',
    tag: 'Prawo pracy', date: '10 stycznia 2025',
    excerpt: 'Zmiany w Kodeksie pracy, nowe przepisy o zwolnieniach i obowiązkach pracodawcy.',
    icon: '💼'
  },
  {
    id: 3, featured: false,
    title: 'Rozwód a podział majątku: 5 rzeczy, które musisz wiedzieć',
    tag: 'Prawo rodzinne', date: '7 stycznia 2025',
    excerpt: 'Najczęstsze błędy popełniane przez strony postępowania o podział majątku wspólnego.',
    icon: '👨‍👩‍👧'
  },
  {
    id: 4, featured: false,
    title: 'RODO 2025 – nowe kary i obowiązki dla przedsiębiorców',
    tag: 'Prawo gospodarcze', date: '3 stycznia 2025',
    excerpt: 'Urząd Ochrony Danych Osobowych zaostrza kontrole. Sprawdź, czy Twoja firma jest bezpieczna.',
    icon: '🛡️'
  },
  {
    id: 5, featured: false,
    title: 'Jak skutecznie dochodzić odszkodowania po wypadku?',
    tag: 'Odszkodowania', date: '28 grudnia 2024',
    excerpt: 'Krok po kroku – co zrobić od razu po wypadku, by nie stracić prawa do odszkodowania.',
    icon: '🚗'
  },
];

/* ============ RENDER FUNCTIONS ============ */

function renderLawyers(list) {
  const grid = document.getElementById('lawyersGrid');
  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--gray-500)"><p>Brak prawników spełniających kryteria.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(l => `
    <div class="lawyer-card reveal-up">
      <div class="lawyer-avatar">${l.avatar}</div>
      <div class="lawyer-info">
        <div class="lawyer-name">${l.name}</div>
        <div class="lawyer-title">${l.title}</div>
        <div class="lawyer-specs">
          ${l.specs.map(s => `<span class="lawyer-spec">${SPEC_LABELS[s] || s}</span>`).join('')}
        </div>
        <div class="lawyer-city">📍 ${CITY_LABELS[l.city] || l.city}</div>
      </div>
    </div>
  `).join('');
  // Re-trigger reveal animations
  setTimeout(initReveal, 50);
}

function renderPricing(tab) {
  const container = document.getElementById('pricingContent');
  if (!container) return;
  const rows = PRICING_DATA[tab] || [];
  container.innerHTML = `
    <table class="price-table">
      <thead>
        <tr>
          <th>Usługa</th>
          <th>Cena</th>
          <th>Uwagi</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td>${r.service}</td>
            <td class="price-amount">${r.price}</td>
            <td>${r.note ? `<span class="price-note-badge">${r.note}</span>` : '—'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

function renderTemplates(list) {
  const grid = document.getElementById('templatesGrid');
  if (!grid) return;
  grid.innerHTML = list.map(t => `
    <div class="template-card reveal-up">
      <div class="template-icon">${t.icon}</div>
      <span class="template-cat">${t.cat}</span>
      <h4>${t.title}</h4>
      <p>${t.desc}</p>
      <div class="template-download">⬇ Pobierz wzór</div>
    </div>
  `).join('');
  setTimeout(initReveal, 50);
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map(p => `
    <div class="blog-card ${p.featured ? 'blog-card-featured' : ''} reveal-up">
      <div class="blog-img">
        <span>${p.icon}</span>
        <div class="blog-img-overlay"></div>
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-tag">${p.tag}</span>
          <span class="blog-date">${p.date}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <span class="blog-read">Czytaj więcej →</span>
      </div>
    </div>
  `).join('');
  setTimeout(initReveal, 50);
}

/* ============ NAV ============ */
function initNav() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('navHamburger');
  const mobile = document.getElementById('navMobile');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  hamburger && hamburger.addEventListener('click', () => {
    mobile.classList.toggle('open');
  });

  // Close mobile on link click
  document.querySelectorAll('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => mobile.classList.remove('open'));
  });
}

/* ============ REVEAL ON SCROLL ============ */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('visible'), Number(delay));
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ============ LAWYER SEARCH ============ */
function initLawyerSearch() {
  const filterSpec = document.getElementById('filterSpec');
  const filterCity = document.getElementById('filterCity');
  const filterName = document.getElementById('filterName');
  const btn = document.getElementById('btnLawyerSearch');

  renderLawyers(LAWYERS);

  const doFilter = () => {
    const spec = filterSpec ? filterSpec.value : '';
    const city = filterCity ? filterCity.value : '';
    const name = filterName ? filterName.value.toLowerCase().trim() : '';
    const results = LAWYERS.filter(l => {
      const specMatch = !spec || l.specs.includes(spec);
      const cityMatch = !city || l.city === city;
      const nameMatch = !name || l.name.toLowerCase().includes(name);
      return specMatch && cityMatch && nameMatch;
    });
    renderLawyers(results);
  };

  btn && btn.addEventListener('click', doFilter);
  filterName && filterName.addEventListener('keydown', e => { if (e.key === 'Enter') doFilter(); });
}

/* ============ MAP TABS ============ */
function initMapTabs() {
  const tabs = document.querySelectorAll('.map-tab');
  const pins = document.querySelectorAll('.map-pin-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const city = tab.dataset.city;
      pins.forEach(p => {
        if (city === 'all' || p.dataset.city === city) {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    });
  });
}

/* ============ PRICING TABS ============ */
function initPricingTabs() {
  const tabs = document.querySelectorAll('.price-tab');
  renderPricing('individual');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPricing(tab.dataset.tab);
    });
  });
}

/* ============ TEMPLATE SEARCH ============ */
function initTemplates() {
  const input = document.getElementById('templateSearch');
  const filterBtns = document.querySelectorAll('.tf-btn');
  let currentCat = 'all';

  const doFilter = () => {
    const q = input ? input.value.toLowerCase().trim() : '';
    const results = TEMPLATES.filter(t => {
      const catMatch = currentCat === 'all' || t.cat === currentCat;
      const textMatch = !q || t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
      return catMatch && textMatch;
    });
    renderTemplates(results);
  };

  renderTemplates(TEMPLATES);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      doFilter();
    });
  });

  input && input.addEventListener('input', doFilter);
}

/* ============ CONTACT FORM ============ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Simulate send
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
}

/* ============ COOKIE BAR ============ */
function initCookieBar() {
  const bar = document.getElementById('cookieBar');
  const btn = document.getElementById('cookieAccept');
  if (!bar) return;

  if (!localStorage.getItem('acs_cookie_accepted')) {
    setTimeout(() => bar.classList.add('show'), 1500);
  }

  btn && btn.addEventListener('click', () => {
    bar.classList.remove('show');
    localStorage.setItem('acs_cookie_accepted', '1');
  });
}

/* ============ VIDEO BG ============ */
function initVideo() {
  const video = document.getElementById('bgVideo');
  if (!video) return;
  video.playbackRate = 0.65;
}

/* ============ SMOOTH SCROLL ============ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============ BOOT ============ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initVideo();
  initSmoothScroll();
  initLawyerSearch();
  initMapTabs();
  initPricingTabs();
  initTemplates();
  renderBlog();
  initContactForm();
  initCookieBar();
});
