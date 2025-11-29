const clubs = [
  {
    id: 'krylatskoe',
    name: 'Гольф-клуб в Крылатском',
    city: 'Москва',
    holes: 18,
    address: 'ул. 3-я Магистральная, 26Б',
    unique: ['Панорама Москвы-реки', 'Городской links'],
    signature: 'Классический рельеф с видом на столицу',
    coord: { lat: 55.7729, lon: 37.4491 },
  },
  {
    id: 'tiger',
    name: 'Тайгер',
    city: 'Москва',
    holes: 9,
    address: '2-й Капотнинский пр., 1, стр. 3',
    unique: ['Индустриальный стиль', 'Компактные фервеи'],
    signature: 'Динамичные девять лунок в Капотне',
    coord: { lat: 55.6457, lon: 37.7903 },
  },
  {
    id: 'moscowcity',
    name: 'Московский городской гольф-клуб',
    city: 'Москва',
    holes: 9,
    address: 'ул. Довженко, 1',
    unique: ['Городской парк', 'Сафари-стиль преград'],
    signature: 'Комфортный парк-курс у Мосфильма',
    coord: { lat: 55.7235, lon: 37.5072 },
  },
  {
    id: 'citygolf',
    name: 'City Golf',
    city: 'Москва',
    holes: 9,
    address: 'Берсеневский пер., 5, стр. 2',
    unique: ['Вид на набережную', 'Крытые симуляторы'],
    signature: 'Центр города с lounge-зоной',
    coord: { lat: 55.7447, lon: 37.6157 },
  },
  {
    id: 'skolkovo',
    name: 'Сколково',
    city: 'Москва',
    holes: 18,
    address: 'Сколковское ш., 50',
    unique: ['Столичный parkland', 'Стадионный грин-комплекс'],
    signature: 'Гладкие гринны и вид на столицу',
    coord: { lat: 55.6732, lon: 37.4409 },
  },
  {
    id: 'korean',
    name: 'Гольф-плаза «Корейский дом»',
    city: 'Москва',
    holes: 9,
    address: 'ул. 1905 года, 7, корп. Е',
    unique: ['Азиатский колорит', 'Точное шорт-игровое поле'],
    signature: 'Компактные лунки в центре',
    coord: { lat: 55.7621, lon: 37.5638 },
  },
  {
    id: 'links',
    name: 'Links National Golf Club',
    city: 'Телешово',
    holes: 18,
    address: 'Дмитровский городской округ, деревня Телешово',
    unique: ['Настоящий links', 'Ветер и вереск'],
    signature: 'Северный британский дух',
    coord: { lat: 56.2775, lon: 37.2925 },
  },
  {
    id: 'mcc',
    name: 'Moscow Country Club',
    city: 'Нахабино',
    holes: 18,
    address: 'Волоколамское ш., 31-й км, стр. 1',
    unique: ['Пионер российского гольфа', 'Сосны и озёра'],
    signature: 'Классика тура с хвойными фервеями',
    coord: { lat: 55.8386, lon: 37.1234 },
  },
  {
    id: 'dmitrov',
    name: 'Dmitrov Golf Resort',
    city: 'Курово',
    holes: 18,
    address: 'деревня Курово, дом 69',
    unique: ['Равнинный ресорт', 'Учебные зоны'],
    signature: 'Комфортные ширины фервеев',
    coord: { lat: 56.4058, lon: 37.6021 },
  },
  {
    id: 'foresthills',
    name: 'Forest Hills Golf Club',
    city: 'Матвейково',
    holes: 18,
    address: 'деревня Матвейково, строение 250',
    unique: ['Лесные балки', 'Высотные перепады'],
    signature: 'Северный парк-курс',
    coord: { lat: 56.2188, lon: 37.1815 },
  },
  {
    id: 'pestovo',
    name: 'Гольф-клуб «Пестово»',
    city: 'Мытищи',
    holes: 18,
    address: 'деревня Румянцево, ул. Никольская, вл. 1',
    unique: ['Водные преграды', 'Клубный дом у воды'],
    signature: 'Панорама водохранилища',
    coord: { lat: 56.0665, lon: 37.6208 },
  },
  {
    id: 'piro',
    name: 'Пирогово',
    city: 'Мытищи',
    holes: 9,
    address: 'Пансионат «Клязьминское водохранилище», дом 3А',
    unique: ['Лунка на воде', 'Лесной парк', '9 лунок'],
    signature: '9-луночный маршрут с водным холлом',
    coord: { lat: 55.9788, lon: 37.6393 },
  },
  {
    id: 'foresta',
    name: 'ForRest',
    city: 'Звенигород',
    holes: 18,
    address: 'Звенигород, лесная зона',
    unique: ['Хвойный лес', 'Перепады высот'],
    signature: 'Альпийские перепады и хруст хвои',
    coord: { lat: 55.7321, lon: 36.8594 },
  },
  {
    id: 'zavidovo',
    name: 'Завидово PGA',
    city: 'Тверская область',
    holes: 18,
    address: 'Тверская обл., Завидово',
    unique: ['Линкс', 'Ветер с Волги'],
    signature: 'Северный линкс с открытыми видами',
    coord: { lat: 56.5333, lon: 35.9 },
  },
  {
    id: 'agalarov',
    name: 'Агаларов Эстейт',
    city: 'Подмосковье',
    holes: 18,
    address: 'Подмосковье, поселок Агаларов',
    unique: ['Резиденции', 'Большие водные преграды'],
    signature: 'Американский стиль с зеркальными озёрами',
    coord: { lat: 55.9624, lon: 37.3113 },
  },
];

const slots = [
  { id: 's1', club: 'skolkovo', date: '2024-09-05', time: '08:10', players: 3, tag: 'Ти-тайм', price: '18 500 ₽', info: 'Stableford • 18 лунок' },
  { id: 's2', club: 'skolkovo', date: '2024-09-05', time: '12:40', players: 4, tag: 'Ти-тайм', price: '19 800 ₽', info: 'Strokeplay • 18 лунок' },
  { id: 's3', club: 'skolkovo', date: '2024-09-06', time: '18:05', players: 2, tag: 'Тренировка', price: '5 500 ₽', info: 'Чиппинг + паттинг' },
  { id: 's4', club: 'piro', date: '2024-09-05', time: '07:20', players: 2, tag: 'Ти-тайм', price: '7 200 ₽', info: '9 лунок, пар 36' },
  { id: 's5', club: 'piro', date: '2024-09-07', time: '10:50', players: 3, tag: 'Тренировка', price: '4 800 ₽', info: 'Разбор водной лунки' },
  { id: 's6', club: 'foresta', date: '2024-09-06', time: '13:30', players: 4, tag: 'Ти-тайм', price: '9 600 ₽', info: '18 лунок, карта slope 134' },
  { id: 's7', club: 'foresta', date: '2024-09-06', time: '19:10', players: 2, tag: 'Гольф-симулятор', price: '3 400 ₽', info: 'Трасса Pebble Beach' },
  { id: 's8', club: 'zavidovo', date: '2024-09-07', time: '08:00', players: 4, tag: 'Ти-тайм', price: '12 000 ₽', info: 'Ветер 3 м/с, линкс' },
  { id: 's9', club: 'zavidovo', date: '2024-09-07', time: '17:40', players: 2, tag: 'Тренировка', price: '6 100 ₽', info: 'Бункеры и паттинг' },
  { id: 's10', club: 'agalarov', date: '2024-09-05', time: '09:15', players: 3, tag: 'Ти-тайм', price: '15 400 ₽', info: 'Сет из 18 луночных видов' },
  { id: 's11', club: 'agalarov', date: '2024-09-05', time: '16:20', players: 4, tag: 'Гольф-симулятор', price: '4 900 ₽', info: 'TrackMan студия' },
  { id: 's12', club: 'skolkovo', date: '2024-09-07', time: '20:10', players: 2, tag: 'Гольф-симулятор', price: '4 200 ₽', info: 'Twilight session' },
  { id: 's13', club: 'piro', date: '2024-09-06', time: '14:05', players: 4, tag: 'Ти-тайм', price: '8 100 ₽', info: 'Дневной свет, 9 лунок' },
  { id: 's14', club: 'foresta', date: '2024-09-05', time: '11:20', players: 2, tag: 'Тренировка', price: '5 000 ₽', info: 'Академия, драйвинг рэндж' },
  { id: 's15', club: 'zavidovo', date: '2024-09-06', time: '07:40', players: 3, tag: 'Ти-тайм', price: '11 300 ₽', info: 'Ранний старт линкс' },
  { id: 's16', club: 'krylatskoe', date: '2024-09-06', time: '09:00', players: 2, tag: 'Ти-тайм', price: '9 900 ₽', info: 'Вид на набережную' },
  { id: 's17', club: 'mcc', date: '2024-09-07', time: '15:10', players: 4, tag: 'Ти-тайм', price: '14 200 ₽', info: 'Хвойные фервеи' },
  { id: 's18', club: 'citygolf', date: '2024-09-05', time: '19:30', players: 3, tag: 'Гольф-симулятор', price: '3 200 ₽', info: 'Вечерний TrackMan' },
  { id: 's19', club: 'korean', date: '2024-09-06', time: '10:20', players: 2, tag: 'Тренировка', price: '2 800 ₽', info: 'Азиатские грин-комплексы' },
  { id: 's20', club: 'links', date: '2024-09-07', time: '07:30', players: 3, tag: 'Ти-тайм', price: '16 500 ₽', info: 'Ранний линкс, ветер 4 м/с' },
];

const tournaments = [
  { id: 't1', name: 'Осенний Кубок Сколково', date: '2024-09-15', format: 'Stroke play • 18 лунок', fee: '25 000 ₽', club: 'skolkovo' },
  { id: 't2', name: 'Pirogovo Water Challenge', date: '2024-09-21', format: 'Stableford • 9 лунок', fee: '11 000 ₽', club: 'piro' },
  { id: 't3', name: 'ForRest Classic', date: '2024-09-29', format: 'Scramble • 18 лунок', fee: '18 000 ₽', club: 'foresta' },
  { id: 't4', name: 'Zavidovo Links Open', date: '2024-10-05', format: 'Match play • 18 лунок', fee: '22 000 ₽', club: 'zavidovo' },
];

const filterState = { date: 'all', time: 'all', players: 'all', tag: 'all', club: 'all' };
const registeredTournaments = new Set();

const navButtons = document.querySelectorAll('[data-nav] .nav-item');
const sections = document.querySelectorAll('.section');
const slotList = document.getElementById('slot-list');
const profileBookings = document.getElementById('profile-bookings');
const clubSelect = document.getElementById('clubSelect');
const playersSelect = document.getElementById('playersSelect');
const dateChips = document.getElementById('date-chips');
const datePicker = document.getElementById('datePicker');
const resetDate = document.getElementById('resetDate');
const activeFilterPill = document.getElementById('active-filter-pill');
const mapFrame = document.getElementById('clubs-map');
const mapClubCards = document.getElementById('map-club-cards');
const clubCards = document.getElementById('club-cards');
const tournamentCards = document.getElementById('tournament-cards');
const courseModal = document.getElementById('course-modal');
const courseClub = document.getElementById('course-club');
const courseMap = document.getElementById('course-map');
const closeCourse = document.getElementById('close-course');
const authModal = document.getElementById('auth-modal');
const closeAuth = document.getElementById('close-auth');
const authForm = document.getElementById('auth-form');
const loginBtn = document.getElementById('login-btn');
const messagesBtn = document.getElementById('messages-btn');
const newsBtn = document.getElementById('news-btn');
const chatBtn = document.getElementById('chat-btn');
const settingsBtn = document.getElementById('settings-btn');
const supportBtn = document.getElementById('support-btn');

function showSection(sectionId) {
  sections.forEach((sec) => sec.classList.toggle('section--active', sec.id === sectionId));
  navButtons.forEach((btn) => btn.classList.toggle('nav-item--active', btn.dataset.section === sectionId));
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

function getPartOfDay(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const minutes = h * 60 + m;
  if (minutes >= 7 * 60 && minutes <= 11 * 60 + 59) return 'morning';
  if (minutes >= 12 * 60 && minutes <= 17 * 60 + 59) return 'day';
  if (minutes >= 18 * 60 && minutes <= 22 * 60) return 'evening';
  return 'other';
}

function renderClubSelect() {
  clubSelect.innerHTML = '<option value="all">Любой клуб</option>' +
    clubs.map((c) => `<option value="${c.id}">${c.name}</option>`).join('');
}

function renderSlots() {
  const filtered = slots.filter((slot) => {
    if (filterState.club !== 'all' && slot.club !== filterState.club) return false;
    if (filterState.tag !== 'all' && slot.tag !== filterState.tag) return false;
    if (filterState.players !== 'all' && Number(filterState.players) !== slot.players) return false;
    if (filterState.date !== 'all' && slot.date !== filterState.date) return false;

    const part = getPartOfDay(slot.time);
    if (filterState.time !== 'all' && part !== filterState.time) return false;
    return true;
  });

  activeFilterPill.innerHTML = Object.entries(filterState)
    .filter(([, v]) => v !== 'all')
    .map(([k, v]) => `<span class="filter-pill">${labelForFilter(k, v)}</span>`)
    .join('');

  slotList.innerHTML = filtered.map((slot) => {
    const club = clubs.find((c) => c.id === slot.club);
    return `
      <article class="slot-card">
        <div class="slot-head">
          <div>
            <div class="slot-time">${slot.time}</div>
            <div class="muted">${formatDate(slot.date)} • ${club?.name || ''}</div>
          </div>
          <div class="slot-tags">
            <span class="tag ${tagClass(slot.tag)}">${slot.tag}</span>
          </div>
        </div>
        <div class="slot-meta">
          <span>${slot.info}</span>
          <span>${slot.players} игрок(а)</span>
          <span>${club?.city || ''}</span>
        </div>
        <div class="slot-foot">
          <strong>${slot.price}</strong>
          <button class="btn primary" data-book-slot="${slot.id}">Бронировать</button>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('[data-book-slot]').forEach((btn) => {
    btn.addEventListener('click', () => alert('Слот зарезервирован: ' + btn.dataset.bookSlot));
  });

  renderProfileFromSlots();
}

function labelForFilter(key, value) {
  const dict = {
    time: { morning: 'Утро', day: 'День', evening: 'Вечер' },
    players: { 1: '1 игрок', 2: '2 игрока', 3: '3 игрока', 4: '4 игрока' },
    tag: { 'Ти-тайм': 'Ти-тайм', 'Тренировка': 'Тренировка', 'Гольф-симулятор': 'Гольф-симулятор' },
    club: clubs.reduce((acc, c) => ({ ...acc, [c.id]: c.name }), {}),
  };
  if (key === 'date' && value !== 'all') return formatDate(value);
  return dict[key]?.[value] || value;
}

function tagClass(tag) {
  if (tag === 'Ти-тайм') return 'tag--tee';
  if (tag === 'Тренировка') return 'tag--training';
  if (tag === 'Гольф-симулятор') return 'tag--sim';
  return '';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
}

function renderProfileFromSlots() {
  const upcoming = slots
    .slice()
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
    .slice(0, 3);
  profileBookings.innerHTML = upcoming.map((slot) => {
    const club = clubs.find((c) => c.id === slot.club);
    return `
      <div class="booking-item">
        <div>
          <div><strong>${club?.name || ''}</strong></div>
          <div class="booking-meta">${formatDate(slot.date)} • ${slot.time} • ${slot.players} игрок(а)</div>
        </div>
        <span class="tag ${tagClass(slot.tag)}">${slot.tag}</span>
      </div>
    `;
  }).join('');
}

function applyFilter(group, value) {
  filterState[group] = value;
  syncFilterUI();
  renderSlots();
}

function syncFilterUI() {
  document.querySelectorAll('[data-filter] .chip').forEach((chip) => {
    const group = chip.closest('[data-filter]').dataset.filter;
    chip.classList.toggle('chip--active', filterState[group] === chip.dataset.value);
  });
  clubSelect.value = filterState.club;
  playersSelect.value = filterState.players;
  if (filterState.date !== 'all') datePicker.value = filterState.date;
  else datePicker.value = '';
}

function bindFilters() {
  document.querySelectorAll('[data-filter] .chip').forEach((chip) => {
    chip.addEventListener('click', () => applyFilter(chip.closest('[data-filter]').dataset.filter, chip.dataset.value));
  });

  playersSelect.addEventListener('change', (e) => applyFilter('players', e.target.value));
  clubSelect.addEventListener('change', (e) => applyFilter('club', e.target.value));
  datePicker.addEventListener('change', (e) => {
    if (e.target.value) applyFilter('date', e.target.value);
  });
  resetDate.addEventListener('click', () => applyFilter('date', 'all'));
}

function buildMapUrl() {
  const avgLon = clubs.reduce((sum, c) => sum + c.coord.lon, 0) / clubs.length;
  const avgLat = clubs.reduce((sum, c) => sum + c.coord.lat, 0) / clubs.length;
  const points = clubs.map((c) => `${c.coord.lon},${c.coord.lat},pm2gnm`).join('~');
  return `https://yandex.ru/map-widget/v1/?ll=${avgLon.toFixed(4)},${avgLat.toFixed(4)}&z=8&pt=${points}`;
}

function renderMapSection() {
  mapFrame.src = buildMapUrl();
  mapClubCards.innerHTML = clubs.map((club) => `
    <article class="card">
      <div class="card-title">${club.name}</div>
      <div class="meta">${club.city} • ${club.holes} лунок</div>
      <div class="muted">${club.address}</div>
      <div class="club-tags">${club.unique.map((u) => `<span class="tag">${u}</span>`).join('')}</div>
      <div class="action-row">
        <button class="btn secondary" data-open-course="${club.id}">Карта поля</button>
        <button class="btn primary" data-nav-club="${club.id}">Слоты</button>
      </div>
    </article>
  `).join('');

  mapClubCards.querySelectorAll('[data-open-course]').forEach((btn) => btn.addEventListener('click', () => openCourse(btn.dataset.openCourse)));
  mapClubCards.querySelectorAll('[data-nav-club]').forEach((btn) => btn.addEventListener('click', () => goToClubSlots(btn.dataset.navClub)));
}

function renderClubsSection() {
  clubCards.innerHTML = clubs.map((club) => `
    <article class="card club-card">
      <div class="card-title">${club.name}</div>
      <div class="meta">${club.city} • ${club.holes} лунок</div>
      <div class="muted">${club.address}</div>
      <p class="muted">${club.signature}</p>
      <div class="club-tags">${club.unique.map((u) => `<span class="tag">${u}</span>`).join('')}</div>
      <div class="action-row">
        <button class="btn ghost" data-open-course="${club.id}">Карта поля</button>
        <button class="btn secondary" data-nav-club="${club.id}">К слотам</button>
      </div>
    </article>
  `).join('');

  clubCards.querySelectorAll('[data-open-course]').forEach((btn) => btn.addEventListener('click', () => openCourse(btn.dataset.openCourse)));
  clubCards.querySelectorAll('[data-nav-club]').forEach((btn) => btn.addEventListener('click', () => goToClubSlots(btn.dataset.navClub)));
}

function renderTournaments() {
  tournamentCards.innerHTML = tournaments.map((t) => {
    const club = clubs.find((c) => c.id === t.club);
    const registered = registeredTournaments.has(t.id);
    return `
      <article class="card tournament-card">
        <div class="card-title">${t.name}</div>
        <div class="meta">${formatDate(t.date)} • ${t.format}</div>
        <div class="muted">${club?.name || ''}</div>
        <div class="action-row">
          <strong>${t.fee}</strong>
          <button class="btn primary" data-register="${t.id}" ${registered ? 'disabled' : ''}>${registered ? 'Вы зарегистрированы' : 'Зарегистрироваться'}</button>
        </div>
      </article>
    `;
  }).join('');

  tournamentCards.querySelectorAll('[data-register]').forEach((btn) => btn.addEventListener('click', () => {
    registeredTournaments.add(btn.dataset.register);
    renderTournaments();
  }));
}

function openCourse(clubId) {
  const club = clubs.find((c) => c.id === clubId);
  if (!club) return;
  courseClub.textContent = club.name;
  courseMap.innerHTML = courseSvg(club);
  courseModal.classList.remove('hidden');
}

closeCourse.addEventListener('click', () => courseModal.classList.add('hidden'));
courseModal.addEventListener('click', (e) => {
  if (e.target === courseModal) courseModal.classList.add('hidden');
});

authModal.addEventListener('click', (e) => {
  if (e.target === authModal) authModal.classList.add('hidden');
});

function goToClubSlots(clubId) {
  applyFilter('club', clubId);
  showSection('play');
}

function courseSvg(club) {
  const palette = {
    skolkovo: ['#0d4d3c', '#d9c7a3'],
    piro: ['#1d7a5a', '#b4e0ff'],
    foresta: ['#0d4d3c', '#bde4c6'],
    zavidovo: ['#0b3a35', '#cfe3ff'],
    agalarov: ['#0d4d3c', '#e4d9c3'],
  }[club.id] || ['#0d4d3c', '#d9c7a3'];
  return `
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="320" height="220" rx="16" fill="${palette[1]}" opacity="0.4" />
      <path d="M20 30 C80 10, 140 40, 210 25 C250 18, 280 50, 300 80 C310 120, 250 140, 190 150 C130 160, 60 150, 30 120 C5 90, 20 60, 20 30 Z" fill="${palette[0]}" opacity="0.25" />
      <circle cx="120" cy="90" r="26" fill="#b4e0ff" opacity="0.8" />
      <circle cx="210" cy="120" r="20" fill="#b4e0ff" opacity="0.6" />
      <rect x="60" y="150" width="36" height="10" rx="5" fill="#c9a35b" />
      <rect x="150" y="60" width="40" height="10" rx="5" fill="#c9a35b" />
      <text x="22" y="200" fill="#151515" font-family="Inter, sans-serif" font-size="13">${club.holes} лунок • ${club.unique.join(', ')}</text>
    </svg>
  `;
}

function renderDateChips() {
  const dates = Array.from(new Set(slots.map((s) => s.date))).sort();
  const chips = [`<button class="chip ${filterState.date === 'all' ? 'chip--active' : ''}" data-value="all">Все даты</button>`]
    .concat(dates.map((date) => `<button class="chip ${filterState.date === date ? 'chip--active' : ''}" data-value="${date}">${formatDate(date)}</button>`));
  dateChips.innerHTML = chips.join('');
  dateChips.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => applyFilter('date', chip.dataset.value)));
}

function bindProfileActions() {
  const info = (label) => alert(label + ' открыто');
  [
    [messagesBtn, 'Сообщения'],
    [newsBtn, 'Новости'],
    [chatBtn, 'Чат'],
    [settingsBtn, 'Настройки'],
    [supportBtn, 'Поддержка'],
  ].forEach(([btn, label]) => btn?.addEventListener('click', () => info(label)));

  loginBtn.addEventListener('click', () => authModal.classList.remove('hidden'));
  closeAuth.addEventListener('click', () => authModal.classList.add('hidden'));
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(authForm);
    const name = formData.get('name');
    const type = formData.get('authType') === 'register' ? 'Регистрация' : 'Вход';
    alert(`${type} завершена: ${name}`);
    authModal.classList.add('hidden');
  });
}

function init() {
  renderClubSelect();
  renderDateChips();
  bindFilters();
  renderSlots();
  renderMapSection();
  renderClubsSection();
  renderTournaments();
  bindProfileActions();
  syncFilterUI();
}

document.addEventListener('DOMContentLoaded', init);
