/* ══════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════ */
const i18n = {
  en: {
    /* Nav */
    nav_about:    'About',
    nav_skills:   'Skills',
    nav_projects: 'Projects',
    nav_contact:  'Contact',

    /* Hero */
    hero_badge: 'Open to opportunities',
    hero_desc:  'Back-end developer specializing in Python and Rust with 4 years of commercial experience.',
    dl_label:   'Download Resume:',
    scroll_hint: 'Scroll down',

    /* About */
    about_tag:   'who i am',
    about_title: 'About Me',
    about_p1:    'Back-end developer specializing in Python and Rust with 4 years of commercial experience.',
    about_p2:    '',
    stat_exp:    'Years Experience',
    stat_proj:   'Commercial Projects',
    stat_en:     'English Level',

    /* Education */
    edu_degree:  'Specialist Degree',
    edu_field:   'Computer Security (10.05.01)',
    edu_uni:     'Saratov State University named after N.G. Chernyshevsky',
    edu_faculty: 'Faculty of Computer Science and IT',

    /* Skills */
    skills_tag:   'what i use',
    skills_title: 'Skills',

    /* Projects */
    projects_tag:   'what i built',
    projects_title: 'Projects',
    tab_work:       'Work Experience',
    tab_personal:   'Personal Projects',
    show_more:      'Show more ↓',
    show_less:      'Show less ↑',

    /* Contact */
    contact_tag:   'get in touch',
    contact_title: 'Contact',
    contact_desc:  'I am open to new opportunities and collaboration. Feel free to reach out via Telegram or Email — I respond quickly.',

    /* Footer */
    footer_text: '© 2024 Sergey Sergeev. Built with clean code.',
  },

  ru: {
    /* Nav */
    nav_about:    'Обо мне',
    nav_skills:   'Навыки',
    nav_projects: 'Проекты',
    nav_contact:  'Контакты',

    /* Hero */
    hero_badge: 'Открыт к предложениям',
    hero_desc:  'Back-end разработчик на Python/Rust, коммерческий стаж 4 года.',
    dl_label:   'Скачать резюме:',
    scroll_hint: 'Прокрутить вниз',

    /* About */
    about_tag:   'кто я',
    about_title: 'Обо мне',
    about_p1:    'Back-end разработчик на Python/Rust, коммерческий стаж 4 года.',
    about_p2:    '',
    stat_exp:    'Года опыта',
    stat_proj:   'Комм. проектов',
    stat_en:     'Уровень English',

    /* Education */
    edu_degree:  'Специалитет',
    edu_field:   'Компьютерная безопасность (10.05.01)',
    edu_uni:     'Саратовский национальный исследовательский государственный университет им. Н.Г. Чернышевского',
    edu_faculty: 'Факультет компьютерных наук и информационных технологий',

    /* Skills */
    skills_tag:   'что использую',
    skills_title: 'Навыки',

    /* Projects */
    projects_tag:   'что создал',
    projects_title: 'Проекты',
    tab_work:       'Опыт работы',
    tab_personal:   'Личные проекты',
    show_more:      'Показать больше ↓',
    show_less:      'Свернуть ↑',

    /* Contact */
    contact_tag:   'связаться',
    contact_title: 'Контакты',
    contact_desc:  'Открыт к новым возможностям и сотрудничеству. Пишите в Telegram или на Email — отвечаю быстро.',

    /* Footer */
    footer_text: '© 2024 Сергей Сергеев. Написано с любовью к чистому коду.',
  }
};

/* ══════════════════════════════════════════
   SKILLS DATA
══════════════════════════════════════════ */
const skillsData = [
  {
    name:  { en: 'Python Ecosystem', ru: 'Экосистема Python' },
    icon:  '🐍',
    color: { bg: 'var(--blue-dim)', text: 'var(--blue)', border: 'rgba(59,130,246,.25)' },
    catColor: 'var(--blue)',
    skills: ['FastAPI', 'Flask', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Asyncio',
             'Pytest', 'Aiohttp', 'BeautifulSoup', 'Gevent', 'Threading',
             'Multiprocessing', 'PyJWT', 'Psycopg2', 'Dishka'],
  },
  {
    name:  { en: 'Rust Ecosystem', ru: 'Экосистема Rust' },
    icon:  '⚙️',
    color: { bg: 'var(--accent-dim)', text: 'var(--accent)', border: 'rgba(249,115,22,.25)' },
    catColor: 'var(--accent)',
    skills: ['Actix-web', 'Tokio', 'SQLX', 'PyO3', 'Serde_json', 'Rayon', 'Rug'],
  },
  {
    name:  { en: 'Databases & Messaging', ru: 'БД и очереди сообщений' },
    icon:  '🗄️',
    color: { bg: 'var(--green-dim)', text: 'var(--green)', border: 'rgba(16,185,129,.25)' },
    catColor: 'var(--green)',
    skills: ['PostgreSQL', 'Redis', 'RabbitMQ', 'Apache Kafka'],
  },
  {
    name:  { en: 'APIs & Protocols', ru: 'API и протоколы' },
    icon:  '🔌',
    color: { bg: 'var(--pink-dim)', text: 'var(--pink)', border: 'rgba(236,72,153,.25)' },
    catColor: 'var(--pink)',
    skills: ['REST API', 'WebSocket', 'MQTT', 'Swagger'],
  },
  {
    name:  { en: 'DevOps & Security', ru: 'DevOps & Security' },
    icon:  '🐳',
    color: { bg: 'var(--purple-dim)', text: 'var(--purple)', border: 'rgba(139,92,246,.25)' },
    catColor: 'var(--purple)',
    skills: ['Docker', 'Linux', 'Git', 'Bash', 'Keycloak'],
  },
];

/* ══════════════════════════════════════════
   PROJECTS DATA
══════════════════════════════════════════ */
const projectsData = {
  work: [
    {
      title: {
        en: 'Pump Equipment Control Service',
        ru: 'Сервис контроля насосного оборудования',
      },
      company: { en: 'OOO "Intellektualnye Resheniya"', ru: 'ООО «Интеллектуальные Решения»' },
      tags: ['Rust', 'MQTT', 'Tokio', 'Microservices'],
      bullets: {
        en: [
          'Designed system architecture from scratch, defining microservices interaction model for monitoring and managing pump equipment in city water supply.',
          'Implemented Rust services with MQTT bus for receiving, processing, and routing telemetry.',
          'Added weather data integration microservice for climate-aware analysis.',
        ],
        ru: [
          'Спроектировал архитектуру системы с нуля, определив микросервисную модель взаимодействия для мониторинга и управления насосным оборудованием городского водоснабжения.',
          'Реализовал сервисы на Rust с MQTT-шиной для приёма, обработки и маршрутизации телеметрии.',
          'Добавил микросервис интеграции с погодными данными для климатического анализа.',
        ],
      },
    },
    {
      title: {
        en: 'Market Monitoring & Patent Purity Services',
        ru: 'Сервисы мониторинга рынка и патентной чистоты',
      },
      company: { en: 'OOO "Intellektualnye Resheniya" (for ZAO "Pharmfirma Sotex")', ru: 'ООО «Интеллектуальные Решения» (для ЗАО «Фармфирма Сотекс»)' },
      tags: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'Keycloak', 'Redis', 'PyJWT', 'WebSocket'],
      bullets: {
        en: [
          'Technical lead: defined technical decisions, conducted code reviews, ensured code quality and architectural principles.',
          'Designed project architecture from scratch (hexagonal), ensuring scalability and domain logic isolation.',
          'Built backend: FastAPI + Pydantic + SQLAlchemy (async), authentication via Keycloak + Redis + JWT.',
          'Implemented real-time monitoring of long-running operations via WebSocket.',
        ],
        ru: [
          'Техлид: определял технические решения, проводил code review, контролировал качество кода и архитектурные принципы.',
          'Спроектировал архитектуру проекта с нуля (гексагональная), обеспечив масштабируемость и изоляцию доменной логики.',
          'Реализовал backend: FastAPI + Pydantic + SQLAlchemy (async), аутентификация Keycloak + Redis + JWT.',
          'Реализовал real-time мониторинг долгих операций через WebSocket.',
        ],
      },
    },
    {
      title: {
        en: 'Freight Control System',
        ru: 'Система контроля грузоперевозок',
      },
      company: { en: 'OOO "Intellektualnye Resheniya"', ru: 'ООО «Интеллектуальные Решения»' },
      tags: ['Python', 'RabbitMQ', 'FastAPI', 'WebSocket'],
      bullets: {
        en: [
          'Built document revocation verification process for vehicles using RabbitMQ queues.',
          'Extended driver mobile app backend: routing, authorization, shipment staging, deviation tracking.',
          'Improved shipment event archiving process.',
          'Implemented driver tracking at checkpoints via web interface.',
        ],
        ru: [
          'Разработал процесс проверки на возможность отзыва документов по ТС через RabbitMQ.',
          'Доработал backend для мобильного приложения водителя: маршруты, авторизация, этапность грузоперевозки, отслеживание отклонений.',
          'Доработал процесс архивации событий грузоперевозок.',
          'Реализовал отслеживание водителей на КПП через веб-интерфейс.',
        ],
      },
    },
    {
      title: {
        en: 'Granulometry Service Web Interface',
        ru: 'WEB-интерфейс сервиса гранулометрии',
      },
      company: { en: 'OOO "Intellektualnye Resheniya"', ru: 'ООО «Интеллектуальные Решения»' },
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      bullets: {
        en: [
          'Optimized data archiving and historical data export mechanism.',
        ],
        ru: [
          'Оптимизировал механизм архивации и выгрузки исторических данных из системы.',
        ],
      },
    },
    {
      title: {
        en: 'Automated Futures Trading Platform',
        ru: 'Платформа автоматической торговли фьючерсами',
      },
      company: { en: 'OOO "Intellektualnye Resheniya"', ru: 'ООО «Интеллектуальные Решения»' },
      tags: ['Rust', 'Actix-web', 'Tokio', 'PyO3', 'WebSocket', 'PostgreSQL', 'Redis'],
      bullets: {
        en: [
          'Automated collection and processing of market data from external trading platforms via API.',
          'Built Rust microservice (Actix-web + Tokio) implementing trading algorithm business logic with async processing.',
          'Designed algorithm configuration mechanism with parallel execution support.',
          'Implemented PnL tracking system and paper trading (simulation) mode for strategy validation.',
          'Significantly improved trading algorithm execution speed via multithreading, PyO3, and WebSocket, reducing reaction time (from market data change on exchange to trading decision) from 2s to 100ms.',
        ],
        ru: [
          'Автоматизировал сбор и обработку рыночных данных с внешних торговых площадок через API.',
          'Разработал микросервис на Rust (Actix-web + Tokio) с бизнес-логикой торговых алгоритмов и асинхронной обработкой.',
          'Спроектировал механизм конфигурации алгоритмов с поддержкой параллельного выполнения.',
          'Реализовал систему учёта PnL и режим симуляции (paper trading) для валидации стратегий.',
          'Значительно повысил скорость выполнения торговых алгоритмов за счёт многопоточности, PyO3 и WebSocket, сократив время реакции (от изменения данных на торговой площадке до принятия торгового решения) с 2 секунд до 100 мс.',
        ],
      },
    },
    {
      title: {
        en: 'Currency Arbitrage Platform',
        ru: 'Платформа арбитража валют',
      },
      company: { en: 'OOO "Intellektualnye Resheniya"', ru: 'ООО «Интеллектуальные Решения»' },
      tags: ['Python', 'Rust', 'FastAPI', 'PostgreSQL'],
      bullets: {
        en: [
          'Automated periodic currency data aggregation from various exchange platforms using Python.',
          'Developed Rust microservice for detecting transfer chains based on aggregated currency data.',
          'Built web application backend including API for core functional modules.',
        ],
        ru: [
          'Автоматизировал периодическую актуализацию валютных данных с различных обменных платформ на Python.',
          'Реализовал микросервис на Rust для обнаружения цепочек переводов на основе агрегированных валютных данных.',
          'Разработал backend веб-приложения, включая API для основных функциональных модулей.',
        ],
      },
    },
  ],

  freelance: [
    {
      title: {
        en: 'Cryptocurrency Portfolio Management Service',
        ru: 'Сервис управления криптовалютным портфелем',
      },
      company: { en: 'Independent commercial project (freelance)', ru: 'Самостоятельный коммерческий проект (фриланс)' },
      tags: ['FastAPI', 'Uvicorn', 'SQLAlchemy', 'Dishka', 'Aiohttp', 'PyJWT'],
      bullets: {
        en: [
          'Led backend development, coordinated frontend/DevOps team of 3, managed client requirements and architecture.',
          'Designed backend from scratch using hexagonal architecture, ensuring scalability and business logic isolation.',
          'Built backend: FastAPI + Uvicorn, async SQLAlchemy, Dishka DI, aiohttp, PyJWT.',
        ],
        ru: [
          'Руководил backend-разработкой, координировал frontend/DevOps команду из 3 человек, взаимодействовал с заказчиком по требованиям и архитектуре.',
          'Спроектировал backend с нуля по гексагональной архитектуре, обеспечив масштабируемость и изоляцию бизнес-логики.',
          'Реализовал backend: FastAPI + Uvicorn, async SQLAlchemy, Dishka DI, aiohttp, PyJWT.',
        ],
      },
    },
  ],
};

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';
let currentTab  = 'work';

/* ══════════════════════════════════════════
   APPLY TRANSLATIONS
══════════════════════════════════════════ */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[currentLang][key] !== undefined) {
      el.textContent = i18n[currentLang][key];
    }
  });

  // Update lang toggle active state
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;

  // Re-render dynamic sections
  renderSkills();
  renderProjects();
}

/* ══════════════════════════════════════════
   SKILLS RENDERER
══════════════════════════════════════════ */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skillsData.map((cat, i) => `
    <div class="skill-cat reveal" style="--delay:${i * 0.08}s">
      <div class="skill-cat-header">
        <div class="skill-cat-icon" style="background:${cat.color.bg};color:${cat.color.text}">
          ${cat.icon}
        </div>
        <span class="skill-cat-name">${cat.name[currentLang]}</span>
      </div>
      <div class="skill-tags">
        ${cat.skills.map(s => `
          <span class="skill-tag" style="background:${cat.color.bg};color:${cat.color.text};border-color:${cat.color.border}">${s}</span>
        `).join('')}
      </div>
    </div>
  `).join('');

  observeReveal();
}

/* ══════════════════════════════════════════
   PROJECTS RENDERER
══════════════════════════════════════════ */
function renderProjectCards(items, tab, showMoreLabel, showLessLabel) {
  return items.map((proj, i) => {
    const bullets     = proj.bullets[currentLang];
    const preview     = bullets.slice(0, 3);
    const extra       = bullets.slice(3);
    const hasMore     = extra.length > 0;
    const extraId     = `extra-${tab}-${i}`;

    return `
      <div class="project-card" style="animation-delay:${i * 0.07}s">
        <div class="project-header">
          <span class="project-num">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <h3 class="project-title">${proj.title[currentLang]}</h3>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <ul class="project-bullets">
          ${preview.map(b => `<li>${b}</li>`).join('')}
          ${hasMore ? `
            <div id="${extraId}" style="display:none;flex-direction:column;gap:8px">
              ${extra.map(b => `<li style="display:flex;gap:10px;font-size:.88rem;color:var(--text-muted);line-height:1.6"><span style="color:var(--accent);font-weight:700;flex-shrink:0">›</span>${b}</li>`).join('')}
            </div>
          ` : ''}
        </ul>
        ${hasMore ? `
          <button class="project-more" onclick="toggleExtra('${extraId}', this, '${showMoreLabel}', '${showLessLabel}')">${showMoreLabel}</button>
        ` : ''}
      </div>
    `;
  }).join('');
}

function makeCompanyHeader(title, role, period, delay) {
  return `
    <div class="project-card" style="animation-delay:${delay}s;border-left:3px solid var(--accent);background:var(--card-alt, var(--card))">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div>
          <h3 style="font-size:1.1rem;font-weight:700;color:var(--text)">${title}</h3>
          <p style="font-size:.88rem;color:var(--text-muted);margin-top:2px">${role}</p>
        </div>
        <span style="font-size:.85rem;color:var(--accent);font-weight:600">${period}</span>
      </div>
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const showMoreLabel = i18n[currentLang].show_more;
  const showLessLabel = i18n[currentLang].show_less;

  const workHeader = makeCompanyHeader(
    currentLang === 'ru' ? 'ООО «Интеллектуальные Решения»' : 'OOO "Intellektualnye Resheniya"',
    currentLang === 'ru' ? 'Back-end разработчик / Технический лидер' : 'Back-end Developer / Technical Lead',
    currentLang === 'ru' ? '2022 — н.в.' : '2022 — Present',
    0
  );

  const freelanceHeader = makeCompanyHeader(
    currentLang === 'ru' ? 'Фриланс' : 'Freelance',
    currentLang === 'ru' ? 'Руководитель проекта / Back-end разработчик' : 'Project Manager / Back-end Developer',
    '2025',
    0
  );

  grid.innerHTML =
    workHeader +
    renderProjectCards(projectsData.work, 'work', showMoreLabel, showLessLabel) +
    freelanceHeader +
    renderProjectCards(projectsData.freelance, 'freelance', showMoreLabel, showLessLabel);
}

function toggleExtra(id, btn, moreLabel, lessLabel) {
  const el = document.getElementById(id);
  const isHidden = el.style.display === 'none' || !el.style.display;
  el.style.display = isHidden ? 'flex' : 'none';
  btn.textContent  = isHidden ? lessLabel : moreLabel;
}

/* ══════════════════════════════════════════
   TYPING ANIMATION
══════════════════════════════════════════ */
const rolesEN = ['Back-end Developer', 'Python Engineer', 'Rust Developer', 'Systems Architect'];
const rolesRU = ['Back-end разработчик', 'Python инженер', 'Rust разработчик', 'Архитектор систем'];

let typeIdx  = 0;
let charIdx  = 0;
let deleting = false;
let typeTimer;

function typeLoop() {
  const roles  = currentLang === 'en' ? rolesEN : rolesRU;
  const target = roles[typeIdx % roles.length];
  const el     = document.getElementById('typingText');
  if (!el) return;

  if (!deleting) {
    el.textContent = target.slice(0, ++charIdx);
    if (charIdx === target.length) {
      deleting = true;
      clearTimeout(typeTimer);
      typeTimer = setTimeout(typeLoop, 1800);
      return;
    }
    typeTimer = setTimeout(typeLoop, 70);
  } else {
    el.textContent = target.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      typeIdx++;
      typeTimer = setTimeout(typeLoop, 300);
      return;
    }
    typeTimer = setTimeout(typeLoop, 35);
  }
}

/* ══════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
══════════════════════════════════════════ */
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════
   NAVBAR SCROLL & ACTIVE LINK
══════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-links a');

  const sections = Array.from(document.querySelectorAll('section[id]'));

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ══════════════════════════════════════════
   HAMBURGER MENU
══════════════════════════════════════════ */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* ══════════════════════════════════════════
   LANGUAGE TOGGLE
══════════════════════════════════════════ */
function initLangToggle() {
  document.getElementById('langToggle').addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-opt');
    if (opt) {
      currentLang = opt.dataset.lang;
    } else {
      currentLang = currentLang === 'en' ? 'ru' : 'en';
    }
    localStorage.setItem('lang', currentLang);

    // Reset typing animation for new language
    clearTimeout(typeTimer);
    charIdx = 0;
    deleting = false;
    const el = document.getElementById('typingText');
    if (el) el.textContent = '';
    typeTimer = setTimeout(typeLoop, 200);

    applyTranslations();
  });
}

/* ══════════════════════════════════════════
   TABS
══════════════════════════════════════════ */
function initTabs() {
  // Tabs removed — all projects shown on one page
}

/* ══════════════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
══════════════════════════════════════════ */
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

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initNavbar();
  initHamburger();
  initLangToggle();
  initTabs();
  initSmoothScroll();
  observeReveal();

  // Start typing
  typeTimer = setTimeout(typeLoop, 600);
});
