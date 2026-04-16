/* ===================================================
   ACS LEGAL — search.js
   Baza instytucji, urzędów i organów państwowych
   =================================================== */

const INSTITUTIONS_DB = [
  // SĄDY
  { id: 1, name: 'Sąd Najwyższy', type: 'sady', city: 'Warszawa', address: 'pl. Krasińskich 2/4/6, 00-951 Warszawa', phone: '+48 22 530 82 00', www: 'https://www.sn.pl', desc: 'Najwyższy organ sądowy Rzeczypospolitej Polskiej.' },
  { id: 2, name: 'Sąd Okręgowy w Warszawie', type: 'sady', city: 'Warszawa', address: 'al. Solidarności 127, 00-898 Warszawa', phone: '+48 22 440 80 00', www: 'https://www.warszawa.so.gov.pl', desc: 'Sąd okręgowy dla rejonu Warszawy i okolic.' },
  { id: 3, name: 'Sąd Rejonowy dla Warszawy-Śródmieścia', type: 'sady', city: 'Warszawa', address: 'ul. Marszałkowska 82, 00-517 Warszawa', phone: '+48 22 697 00 00', www: 'https://www.warszawa-srodmiescie.sr.gov.pl', desc: 'Sąd rejonowy obsługujący centrum Warszawy.' },
  { id: 4, name: 'Sąd Okręgowy w Gdańsku', type: 'sady', city: 'Gdańsk', address: 'ul. Nowe Ogrody 30/34, 80-803 Gdańsk', phone: '+48 58 321 32 11', www: 'https://www.gdansk.so.gov.pl', desc: 'Sąd okręgowy dla obszaru Gdańska i Trójmiasta.' },
  { id: 5, name: 'Sąd Okręgowy w Toruniu', type: 'sady', city: 'Toruń', address: 'ul. Piekary 51, 87-100 Toruń', phone: '+48 56 610 53 00', www: 'https://www.torun.so.gov.pl', desc: 'Sąd okręgowy dla rejonu Torunia i Kujaw.' },
  { id: 6, name: 'Sąd Okręgowy w Radomiu', type: 'sady', city: 'Radom', address: 'ul. Marszałka J. Piłsudskiego 10, 26-600 Radom', phone: '+48 48 368 03 00', www: 'https://www.radom.so.gov.pl', desc: 'Sąd okręgowy dla obszaru Radomia i powiatu radomskiego.' },
  { id: 7, name: 'Sąd Okręgowy w Słupsku', type: 'sady', city: 'Słupsk', address: 'ul. Zamenhofa 7, 76-200 Słupsk', phone: '+48 59 846 50 00', www: 'https://www.slupsk.so.gov.pl', desc: 'Sąd okręgowy dla rejonu Słupska i Pomorza Środkowego.' },
  { id: 8, name: 'Naczelny Sąd Administracyjny', type: 'sady', city: 'Warszawa', address: 'ul. Gabriela Piotra Boduena 3/5, 00-011 Warszawa', phone: '+48 22 551 60 00', www: 'https://www.nsa.gov.pl', desc: 'Sprawuje kontrolę działalności organów administracji publicznej.' },
  { id: 9, name: 'Trybunał Konstytucyjny', type: 'sady', city: 'Warszawa', address: 'al. Jana Chrystiana Szucha 12a, 00-918 Warszawa', phone: '+48 22 657 45 11', www: 'https://www.trybunal.gov.pl', desc: 'Organ sądownictwa konstytucyjnego.' },
  { id: 10, name: 'Sąd Apelacyjny w Warszawie', type: 'sady', city: 'Warszawa', address: 'ul. Jasna 2/4, 00-013 Warszawa', phone: '+48 22 695 73 00', www: 'https://www.warszawa.sa.gov.pl', desc: 'Sąd apelacyjny dla obszaru apelacji warszawskiej.' },

  // PROKURATURY
  { id: 11, name: 'Prokuratura Krajowa', type: 'prokuratury', city: 'Warszawa', address: 'ul. Postępu 3, 02-676 Warszawa', phone: '+48 22 694 33 00', www: 'https://pk.gov.pl', desc: 'Naczelna jednostka prokuratury powszechnej.' },
  { id: 12, name: 'Prokuratura Regionalna w Warszawie', type: 'prokuratury', city: 'Warszawa', address: 'ul. Płocka 9, 01-231 Warszawa', phone: '+48 22 534 23 00', www: 'https://www.warszawa.pr.gov.pl', desc: 'Prokuratura regionalna dla obszaru Warszawy.' },
  { id: 13, name: 'Prokuratura Regionalna w Gdańsku', type: 'prokuratury', city: 'Gdańsk', address: 'ul. Wały Jagiellońskie 38, 80-853 Gdańsk', phone: '+48 58 305 28 00', www: 'https://www.gdansk.pr.gov.pl', desc: 'Prokuratura regionalna dla obszaru Trójmiasta.' },

  // URZĘDY ADMINISTRACJI
  { id: 14, name: 'Urząd Miasta Stołecznego Warszawy', type: 'urzedy', city: 'Warszawa', address: 'pl. Bankowy 3/5, 00-950 Warszawa', phone: '+48 22 443 14 00', www: 'https://www.um.warszawa.pl', desc: 'Główny organ administracji miejskiej Warszawy.' },
  { id: 15, name: 'Mazowiecki Urząd Wojewódzki', type: 'urzedy', city: 'Warszawa', address: 'pl. Bankowy 3/5, 00-950 Warszawa', phone: '+48 22 695 69 95', www: 'https://www.gov.pl/mazowiecki-uw', desc: 'Terenowy organ administracji rządowej województwa mazowieckiego.' },
  { id: 16, name: 'Urząd Marszałkowski Województwa Mazowieckiego', type: 'urzedy', city: 'Warszawa', address: 'ul. Jagiellońska 26, 03-719 Warszawa', phone: '+48 22 597 93 00', www: 'https://www.mazovia.pl', desc: 'Organ wykonawczy samorządu województwa mazowieckiego.' },
  { id: 17, name: 'Urząd Miasta Gdańska', type: 'urzedy', city: 'Gdańsk', address: 'ul. Nowe Ogrody 8/12, 80-803 Gdańsk', phone: '+48 58 323 60 00', www: 'https://www.gdansk.pl', desc: 'Organ administracji miejskiej Gdańska.' },
  { id: 18, name: 'Urząd Miasta Torunia', type: 'urzedy', city: 'Toruń', address: 'ul. Wały gen. Sikorskiego 8, 87-100 Toruń', phone: '+48 56 611 18 00', www: 'https://www.torun.pl', desc: 'Organ administracji miejskiej Torunia.' },
  { id: 19, name: 'Urząd Miejski w Radomiu', type: 'urzedy', city: 'Radom', address: 'ul. Jana Kilińskiego 30, 26-610 Radom', phone: '+48 48 362 01 00', www: 'https://www.radom.pl', desc: 'Organ administracji miejskiej Radomia.' },
  { id: 20, name: 'Urząd Miejski w Słupsku', type: 'urzedy', city: 'Słupsk', address: 'pl. Zwycięstwa 3, 76-200 Słupsk', phone: '+48 59 848 82 00', www: 'https://www.slupsk.pl', desc: 'Organ administracji miejskiej Słupska.' },

  // ZUS / KRUS
  { id: 21, name: 'ZUS – Centrala', type: 'zus', city: 'Warszawa', address: 'ul. Szamocka 3/5, 01-748 Warszawa', phone: '+48 22 560 16 00', www: 'https://www.zus.pl', desc: 'Zakład Ubezpieczeń Społecznych – organ ubezpieczeń społecznych.' },
  { id: 22, name: 'ZUS I Oddział w Warszawie', type: 'zus', city: 'Warszawa', address: 'ul. Senatorska 6/8, 00-917 Warszawa', phone: '+48 22 837 44 55', www: 'https://www.zus.pl', desc: 'Oddział ZUS obsługujący centrum Warszawy.' },
  { id: 23, name: 'ZUS Oddział w Gdańsku', type: 'zus', city: 'Gdańsk', address: 'ul. Chmielna 27/33, 80-748 Gdańsk', phone: '+48 58 307 11 00', www: 'https://www.zus.pl', desc: 'Oddział ZUS dla obszaru Trójmiasta.' },
  { id: 24, name: 'KRUS Centrala', type: 'zus', city: 'Warszawa', address: 'al. Niepodległości 190, 00-608 Warszawa', phone: '+48 22 592 64 00', www: 'https://www.krus.gov.pl', desc: 'Kasa Rolniczego Ubezpieczenia Społecznego.' },

  // URZĘDY SKARBOWE
  { id: 25, name: 'Urząd Skarbowy Warszawa-Śródmieście', type: 'skarbowe', city: 'Warszawa', address: 'ul. Lindleya 14, 02-013 Warszawa', phone: '+48 22 579 15 00', www: 'https://www.mazowieckie.kas.gov.pl', desc: 'Urząd skarbowy dla centrum Warszawy.' },
  { id: 26, name: 'Pierwsza Mazowiecka IS w Warszawie', type: 'skarbowe', city: 'Warszawa', address: 'ul. Dolna 18/20, 00-773 Warszawa', phone: '+48 22 561 10 00', www: 'https://www.mazowieckie.kas.gov.pl', desc: 'Izba skarbowa obsługująca duże podmioty.' },
  { id: 27, name: 'Urząd Skarbowy w Gdańsku', type: 'skarbowe', city: 'Gdańsk', address: 'ul. Suchanino 49, 80-951 Gdańsk', phone: '+48 58 301 55 00', www: 'https://www.pomorskie.kas.gov.pl', desc: 'Urząd skarbowy dla obszaru Gdańska.' },
  { id: 28, name: 'Urząd Skarbowy w Radomiu', type: 'skarbowe', city: 'Radom', address: 'ul. Struga 26, 26-600 Radom', phone: '+48 48 362 76 00', www: 'https://www.mazowieckie.kas.gov.pl', desc: 'Urząd skarbowy dla obszaru Radomia.' },

  // ORGANY NADZORCZE
  { id: 29, name: 'Urząd Ochrony Danych Osobowych (UODO)', type: 'nadzorcze', city: 'Warszawa', address: 'ul. Stawki 2, 00-193 Warszawa', phone: '+48 22 531 03 00', www: 'https://www.uodo.gov.pl', desc: 'Organ ochrony danych osobowych w Polsce.' },
  { id: 30, name: 'Urząd Ochrony Konkurencji i Konsumentów (UOKiK)', type: 'nadzorcze', city: 'Warszawa', address: 'pl. Powstańców Warszawy 1, 00-030 Warszawa', phone: '+48 22 55 60 800', www: 'https://www.uokik.gov.pl', desc: 'Centralny organ administracji rządowej ds. ochrony konkurencji i konsumentów.' },
  { id: 31, name: 'Komisja Nadzoru Finansowego (KNF)', type: 'nadzorcze', city: 'Warszawa', address: 'ul. Piękna 20, 00-549 Warszawa', phone: '+48 22 262 50 00', www: 'https://www.knf.gov.pl', desc: 'Nadzór nad rynkiem finansowym w Polsce.' },
  { id: 32, name: 'Rzecznik Finansowy', type: 'nadzorcze', city: 'Warszawa', address: 'ul. Nowogrodzka 47a, 00-695 Warszawa', phone: '+48 22 333 73 26', www: 'https://www.rf.gov.pl', desc: 'Ochrona klientów usług finansowych, w tym w sprawach bankowych.' },
  { id: 33, name: 'Rzecznik Praw Obywatelskich (RPO)', type: 'nadzorcze', city: 'Warszawa', address: 'al. Solidarności 77, 00-090 Warszawa', phone: '+48 22 551 77 00', www: 'https://www.rpo.gov.pl', desc: 'Ochrona praw i wolności obywateli.' },
  { id: 34, name: 'Państwowa Inspekcja Pracy (PIP)', type: 'nadzorcze', city: 'Warszawa', address: 'ul. Krucza 38/42, 00-926 Warszawa', phone: '+48 22 391 82 00', www: 'https://www.pip.gov.pl', desc: 'Nadzór nad przestrzeganiem prawa pracy.' },
  { id: 35, name: 'Urząd Patentowy RP', type: 'nadzorcze', city: 'Warszawa', address: 'al. Niepodległości 188/192, 00-950 Warszawa', phone: '+48 22 579 03 66', www: 'https://www.uprp.pl', desc: 'Rejestracja patentów, znaków towarowych, wzorów przemysłowych.' },
];

/* ============ SEARCH ENGINE ============ */
const SearchEngine = {
  data: INSTITUTIONS_DB,
  currentResults: [...INSTITUTIONS_DB],

  normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ł/g, 'l')
      .replace(/ą/g, 'a')
      .replace(/ę/g, 'e')
      .replace(/ó/g, 'o')
      .replace(/ś/g, 's')
      .replace(/ź|ż/g, 'z')
      .replace(/ć/g, 'c')
      .replace(/ń/g, 'n');
  },

  search(query = '', category = '') {
    const q = this.normalize(query.trim());
    this.currentResults = this.data.filter(inst => {
      const nameMatch = this.normalize(inst.name).includes(q);
      const descMatch = this.normalize(inst.desc).includes(q);
      const cityMatch = this.normalize(inst.city).includes(q);
      const textMatch = !q || nameMatch || descMatch || cityMatch;
      const catMatch = !category || inst.type === category;
      return textMatch && catMatch;
    });
    return this.currentResults;
  },

  renderCard(inst) {
    const typeLabels = {
      sady: 'Sąd',
      prokuratury: 'Prokuratura',
      urzedy: 'Urząd administracji',
      zus: 'ZUS / KRUS',
      skarbowe: 'Urząd skarbowy',
      nadzorcze: 'Organ nadzorczy'
    };
    return `
      <div class="inst-card">
        <span class="inst-type">${typeLabels[inst.type] || inst.type}</span>
        <h4>${inst.name}</h4>
        <p>📍 ${inst.address}</p>
        ${inst.phone ? `<a href="tel:${inst.phone}">${inst.phone}</a>` : ''}
        ${inst.www ? `<a href="${inst.www}" target="_blank" rel="noopener">Strona internetowa →</a>` : ''}
      </div>
    `;
  },

  renderResults(container, results) {
    if (!container) return;
    if (results.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--gray-500)">
          <div style="font-size:2rem;margin-bottom:12px">🔍</div>
          <p>Brak wyników dla podanego zapytania.</p>
        </div>`;
      return;
    }
    container.innerHTML = results.map(inst => this.renderCard(inst)).join('');
  },

  init() {
    const container = document.getElementById('instResults');
    const input = document.getElementById('instSearch');
    const select = document.getElementById('instCategory');
    const btn = document.getElementById('btnInstSearch');

    if (!container) return;

    // Show initial results (first 12)
    this.renderResults(container, this.data.slice(0, 12));

    const doSearch = () => {
      const q = input ? input.value : '';
      const cat = select ? select.value : '';
      const results = this.search(q, cat);
      this.renderResults(container, results.slice(0, 18));
    };

    if (btn) btn.addEventListener('click', doSearch);
    if (input) {
      input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
      input.addEventListener('input', () => {
        if (input.value.length === 0) {
          this.renderResults(container, this.data.slice(0, 12));
        }
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => SearchEngine.init());
