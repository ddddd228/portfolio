const TELEGRAM_URL = "https://t.me/ddesigner02";

const experiences = [
  {
    id: "emcd",
    name: "emcd.io",
    role: "staff & founding product designer",
    description:
      "Сделал редизайн майнинг-продуктов как второй продуктовый дизайнер: спроектировал B2B админ-панель, white-label пул, систему мониторинга и cloud-майнинг. Развивал дизайн-систему и как growth-designer влиял на конверсию, активацию и удержание.",
    icon: "emcd",
    logo: "emcd",
    cases: [
      "Клиентский майнинг-пул",
      "Регулярные отчёты без ручных действий",
      "Снижение хешрейта: прозрачность и контроль для майнеров.",
    ],
    screens: [
      { src: "assets/1emcd-screens.png", width: "wide" },
      { src: "assets/2emcd-screens.png", width: "regular" },
      { src: "assets/3emcd-screens.png", width: "regular" },
    ],
  },
  {
    id: "alpha",
    name: "альфа банк",
    role: "senior product designer",
    description:
      "Работал в командах розницы, бизнеса и эмоционального дизайна. Участвовал в редизайне дашборда «Альфа-Бизнес». Внедрял геймификацию и сторителлинг, влияя на Retention и CSAT.",
    icon: "alpha",
    logo: "alpha",
    cases: [
      "Переосмысление реферальной программы в крупном банкинге. Прокачка эмоциональным дизайном.",
      "Партнерство через карты лояльности",
    ],
    screens: [
      { src: "assets/1alphaa-screens.png", width: "regular" },
      { src: "assets/2alphaa-screens.png", width: "regular" },
      { src: "assets/3alphaa-screens.png", width: "regular" },
    ],
  },
  {
    id: "overchat",
    name: "overchat ai",
    role: "lead product designer",
    description:
      "Работал единственным дизайнером: сформировал визуальный стиль и наладил взаимодействие между CPO и разработкой. За месяц с командой запустили дизайн-систему, переработали логику продукта и подготовили релиз в App Store и Google Play. Внедрил HADI-циклы с маркетингом.",
    icon: "overchat",
    logo: "overchat",
    cases: [
      { title: "увеличение конверсии в регистрацию" },
      { title: "создание кроссплатформенной дс", href: "https://www.figma.com/design/HRShWdySgFO4x8dNIjt3M1/ELMO-DS---cross-platform?node-id=0-1&t=lq6uE9rmDSXKHmUC-1" },
    ],
    screens: [
      { src: "assets/1overchat-screens.png", width: "regular" },
      { src: "assets/2overchat-screens.png", width: "regular" },
      { src: "assets/3overchat-screens.png", width: "regular" },
    ],
  },
  {
    id: "podeli",
    name: "подели",
    role: "senior product designer",
    description:
      "Создал единый UI-kit виджетов для партнёров Подели, заменив устаревший набор компонентов. Решение закрыло 90% типовых сценариев, сократив ручные доработки и обращения в поддержку. Партнёры стали быстрее внедрять интеграции, снизилась операционная нагрузка на команду.",
    icon: "podeli",
    logo: "podeli",
    screens: [
      { src: "assets/1podeli-screens.png", width: "regular" },
      { src: "assets/2podeli-screens.png", width: "regular" },
      { src: "assets/3podeli-screens.png", width: "regular" },
    ],
  },
  {
    id: "chums",
    name: "chums chat",
    role: "founding designer",
    description:
      "Спроектировал с нуля визуальный язык продукта, вывели продукт в MVP-версию, дополнительно разработал масштабируемый UI-kit и внедрил фичи шифрования на базе Matrix.",
    icon: "chums",
    logo: "chums",
    cases: [
      { title: "смотреть фигму проекта", href: "https://www.figma.com/design/657WPc2ttgrUlpkIDz9kgV/%E2%98%82%EF%B8%8F-Chums--%D0%9C%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80?node-id=1-4&t=y7QY869j1EuGjtp9-1" },
    ],
    screens: [
      { src: "assets/1churms-screens.png", width: "narrow" },
      { src: "assets/2churms-screens.png", width: "narrow" },
      { src: "assets/3churms-screens.png", width: "narrow" },
    ],
  },
];

const secondaryItems = [
  { name: "яндекс.go", icon: "Я", className: "secondary-yandex", logo: "assets/yandexGo-logo.png" },
  { name: "olimpbet", icon: "O", className: "secondary-olimpbet", logo: "assets/olimpbet-logo.png" },
  { name: "газпром гид", icon: "G", className: "secondary-gazprom", logo: "assets/gazprom-logo.png" },
  { name: "1win", icon: "1W", className: "secondary-1win", logo: "assets/1win-logo.png" },
  { name: "find my kids", icon: "FMK", className: "secondary-findmykids", logo: "assets/FindMyKids-logo.png" },
];

const secondaryCompanies = [
  {
    id: "yandex",
    name: "яндекс.go",
    role: "Прошел до следующего этапа",
    roleVariant: "default",
    description: "Спроектировать масштабируемую карточку аренды в сервисе «Бери Заряд», которая позволит арендовать 2+ пауэрбанков с одного аккаунта и показать полный пользовательский флоу аренды нескольких устройств с учетом ограничений сервиса.",
    externalLink: { text: "читать решение задачи на vc.ru", href: "https://vc.ru/design/2011404-dizajn-process-dlja-produktovogo-dizajnera" },
    logoBg: null,
    logoSrc: "assets/yandexGo-logo.png",
    screens: [
      { src: "assets/1yandex-screens.png", width: "regular" },
      { src: "assets/2yandex-screens.png", width: "regular" },
      { src: "assets/3yandex-screens.png", width: "regular" },
    ],
  },
  {
    id: "olimpbet",
    name: "olimpbet",
    role: "Оффер",
    roleVariant: "offer",
    description: "Спроектировать интерфейс страницы Live-события по теннису для беттинг-приложения, включающий шапку события, группы маркетов с поиском, видеотрансляцию/лайвтрекер и купон ставок типа «Система».",
    externalLink: { text: "смотреть figma с решением", href: "https://www.figma.com/design/QC342HCgqycg6hfZzrVrMO/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-olimpbet--%D0%90%D1%80%D0%B0%D0%BA%D0%B5%D0%BB%D0%BE%D0%B2-%D0%94%D0%94--Copy-?node-id=1-9&t=zDy7zW1notIbD6D4-1" },
    logoBg: null,
    logoSrc: "assets/olimpbet-logo.png",
    screens: [
      { src: "assets/1olimpbet-screens.png", width: "regular" },
      { src: "assets/2olimpbet-screens.png", width: "regular" },
      { src: "assets/3olimpbet-screens.png", width: "regular" },
    ],
  },
  {
    id: "gazprom",
    name: "газпром гид",
    role: "Оффер",
    roleVariant: "offer",
    description: "Спроектировать главный экран мобильного образовательного приложения для сотрудников компании с базовым курсом для новичков (с прогрессом), каталогом курсов, доступом к достижениям и возможностью обратиться в поддержку.",
    externalLink: { text: "смотреть figma с решением", href: "https://www.figma.com/design/gfPRxZPgJEPDkSb4ONI0KN/%D0%93%D0%B0%D0%B7%D0%BF%D1%80%D0%BE%D0%BC-ID---%D0%90%D1%80%D0%B0%D0%BA%D0%B5%D0%BB%D0%BE%D0%B2-%D0%94%D0%94?node-id=1-7&t=5qXGurlycmr0EIbP-1" },
    logoBg: null,
    logoSrc: "assets/gazprom-logo.png",
    screens: [
      { src: "assets/1gazprom-screens.png", width: "regular" },
      { src: "assets/2gazprom-screens.png", width: "regular" },
      { src: "assets/3gazprom-screens.png", width: "regular" },
    ],
  },
  {
    id: "1win",
    name: "1win",
    role: "Оффер",
    roleVariant: "offer",
    description: "Спроектировать два экрана мобильного приложения для путешествий во времени: экран оформления полёта и экран оплаченного билета с ключевой информацией о поездке и возможностью сканирования/добавления билета в Wallet.",
    externalLink: { text: "смотреть figma с решением", href: "https://www.figma.com/design/6y1FADMXzxLdQ3Y17RkKJx/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5--%D0%90%D1%80%D0%B0%D0%BA%D0%B5%D0%BB%D0%BE%D0%B2-%D0%94%D0%94?node-id=0-1&t=59KfFX6DCYGJT6rz-1" },
    logoBg: null,
    logoSrc: "assets/1win-logo.png",
    screens: [
      { src: "assets/11win-screens.png", width: "regular" },
      { src: "assets/21win-screens.png", width: "regular" },
      { src: "assets/31win-screens.png", width: "regular" },
    ],
  },
  {
    id: "findmykids",
    name: "find my kids",
    role: "Прошел до следующего этапа",
    roleVariant: "default",
    description: "Провести UX-ревью экранов Main Screen и Profile: проанализировать текущие интерфейсные решения, выделить сильные и слабые стороны с аргументацией и предложить улучшенную версию экранов, исправляющую выявленные проблемы.",
    externalLink: { text: "смотреть figma с решением", href: "https://www.figma.com/design/07lbcuzQdmxyXog6BQsKeN/find-my-kids--%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%B0-%D0%90%D1%80%D0%B0%D0%BA%D0%B5%D0%BB%D0%BE%D0%B2?node-id=0-1&t=ytkVdcEv7mVQl8Uv-1" },
    logoBg: null,
    logoSrc: "assets/FindMyKids-logo.png",
    screens: [
      { src: "assets/1FindMyKids-screens.png", width: "regular" },
      { src: "assets/2FindMyKids-screens.png", width: "regular" },
      { src: "assets/3FindMyKids-screens.png", width: "regular" },
    ],
  },
];

const emcdLogoLayers = ["assets/emcd-logo.png"];

const podeliLogoSrc = "assets/podeli-logo.png";
const chumsLogoSrc = "assets/churns-logo.png";

const experienceLogoSrc = {
  alpha: "assets/alpha-logo.png",
  overchat: "assets/overchat-logo.png",
};

const experienceNav = document.getElementById("experience-nav");
const secondaryNav = document.getElementById("secondary-nav");
const desktopSections = document.getElementById("desktop-sections");
const mobileCompany = document.getElementById("mobile-company");
const mobileExperienceNav = document.getElementById("mobile-experience-nav");
const mobileSecondaryNav = document.getElementById("mobile-secondary-nav");
const nextCompanyButton = document.getElementById("next-company");
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

let currentMobileIndex = 0;

document.querySelectorAll(".telegram-button").forEach((link) => {
  link.href = TELEGRAM_URL;
  if (TELEGRAM_URL === "#") {
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

function createEmcdMarkup(tagName = "div", className = "") {
  const wrapper = document.createElement(tagName);
  wrapper.className = className;

  emcdLogoLayers.forEach((src) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    wrapper.appendChild(image);
  });

  return wrapper;
}

function createOverchatGlyph(size) {
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;

  const specs = [
    { x: 0, y: size / 2 - size * 0.095, r: 180 },
    { x: size / 2 - size * 0.095, y: 0, r: 90 },
    { x: size / 2 - size * 0.095, y: size - size * 0.19, r: 270 },
    { x: size - size * 0.19, y: size / 2 - size * 0.095, r: 0 },
  ];

  specs.forEach((item) => {
    const bar = document.createElement("span");
    bar.style.position = "absolute";
    bar.style.left = `${item.x}px`;
    bar.style.top = `${item.y}px`;
    bar.style.width = `${size * 0.58}px`;
    bar.style.height = `${size * 0.19}px`;
    bar.style.borderRadius = `${size}px`;
    bar.style.background = "#fff";
    bar.style.transformOrigin = "center center";
    bar.style.transform = `rotate(${item.r}deg)`;
    wrapper.appendChild(bar);
  });

  return wrapper;
}

function createPodeliGlyph(_size, src) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  return image;
}

function createChumsGlyph(_size, src) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  return image;
}

function renderIcon(type, isLarge = false) {
  const size = isLarge ? 80 : 30;
  const icon = document.createElement("div");
  icon.className = `${isLarge ? "company-logo" : "nav-icon"} ${isLarge ? "company-logo" : "nav-icon"}--${type}`;

  if (type === "emcd") {
    const markup = createEmcdMarkup("div", isLarge ? "company-logo company-logo--emcd" : "nav-icon nav-icon--emcd");
    return markup;
  }

  if (type === "alpha" && experienceLogoSrc.alpha) {
    const img = document.createElement("img");
    img.src = experienceLogoSrc.alpha;
    img.alt = "";
    icon.appendChild(img);
    return icon;
  }

  if (type === "overchat" && experienceLogoSrc.overchat) {
    const img = document.createElement("img");
    img.src = experienceLogoSrc.overchat;
    img.alt = "";
    icon.appendChild(img);
    return icon;
  }

  if (type === "alpha") {
    icon.textContent = "A";
    return icon;
  }

  if (type === "overchat") {
    icon.appendChild(createOverchatGlyph(isLarge ? 50 : 22));
    return icon;
  }

  if (type === "podeli") {
    icon.appendChild(createPodeliGlyph(isLarge ? 62 : 22, podeliLogoSrc));
    return icon;
  }

  if (type === "chums") {
    icon.appendChild(createChumsGlyph(isLarge ? 62 : 26, chumsLogoSrc));
    return icon;
  }

  return icon;
}

function createNavButton(item, index, mobile = false) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "nav-item";
  button.dataset.target = item.id;
  button.setAttribute("aria-label", item.name);
  button.appendChild(renderIcon(item.icon));

  const label = document.createElement("span");
  label.className = "nav-item__label";
  label.textContent = item.name;
  button.appendChild(label);

  button.addEventListener("click", () => {
    if (mobile) {
      currentMobileIndex = index;
      renderMobileCompany();
      closeMenu();
      return;
    }

    document.getElementById(`section-${item.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  li.appendChild(button);
  return li;
}

function createSecondaryItem(item) {
  const li = document.createElement("li");

  const secondaryData = secondaryCompanies.find((c) => c.name === item.name);
  if (secondaryData) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-item";
    button.appendChild(createSecondaryIcon(item));
    const label = document.createElement("span");
    label.className = "nav-item__label";
    label.textContent = item.name;
    button.appendChild(label);
    button.addEventListener("click", () => {
      document.getElementById(`section-${secondaryData.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    li.appendChild(button);
  } else {
    const div = document.createElement("div");
    div.className = "nav-item is-disabled";
    div.appendChild(createSecondaryIcon(item));
    const label = document.createElement("span");
    label.className = "nav-item__label";
    label.textContent = item.name;
    div.appendChild(label);
    li.appendChild(div);
  }
  return li;
}

function createSecondaryIcon(item) {
  const icon = document.createElement("div");
  icon.className = `nav-icon nav-icon--secondary ${item.className}`;
  if (item.logo) {
    const img = document.createElement("img");
    img.src = item.logo;
    img.alt = "";
    icon.appendChild(img);
  } else {
    icon.textContent = item.icon;
  }
  return icon;
}

function createCaseLinks(cases, parent, companyId) {
  const list = document.createElement("div");
  list.className = parent === "mobile" ? "mobile-company__links" : "case-links";

  (cases || []).forEach((item, index) => {
    const title = typeof item === "string" ? item : item.title;
    const pending = typeof item === "object" && item.pending;
    const externalHref = typeof item === "object" && item.href ? item.href : null;

    if (pending) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "case-link case-link--pending";
      btn.textContent = title;
      btn.addEventListener("click", () => showToast("кейс в работе, скоро покажу"));
      list.appendChild(btn);
    } else {
      const link = document.createElement("a");
      link.href = externalHref || ("case.html#" + encodeURIComponent(companyId) + "/" + index);
      link.className = "case-link";
      link.textContent = title;
      if (externalHref) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      list.appendChild(link);
    }
  });

  return list;
}

function createScreens(screens, mobile = false) {
  const grid = document.createElement("div");
  grid.className = mobile ? "mobile-screens" : "screens-grid";

  screens.forEach((screen) => {
    const card = document.createElement("div");
    card.className = "screen-card";
    card.dataset.width = screen.width;

    const image = document.createElement("img");
    image.src = screen.src;
    image.alt = "";
    card.appendChild(image);
    grid.appendChild(card);
  });

  return grid;
}

function createSecondaryLogo(company) {
  const logo = document.createElement("div");
  logo.className = "company-logo";
  if (company.logoBg) {
    logo.style.background = company.logoBg;
  }
  if (company.logoSrc) {
    const img = document.createElement("img");
    img.src = company.logoSrc;
    img.alt = "";
    logo.appendChild(img);
  }
  return logo;
}

function renderSecondarySection(item) {
  const section = document.createElement("section");
  section.className = "company-section";
  section.id = `section-${item.id}`;

  const header = document.createElement("div");
  header.className = "company-header";
  header.appendChild(createSecondaryLogo(item));

  const meta = document.createElement("div");
  meta.className = "company-meta";

  const title = document.createElement("h2");
  title.textContent = item.name;
  meta.appendChild(title);

  const role = document.createElement("p");
  if (item.roleVariant === "offer") {
    role.className = "company-role--offer";
  }
  role.textContent = item.role;
  meta.appendChild(role);

  header.appendChild(meta);

  const description = document.createElement("p");
  description.className = "company-description";
  description.textContent = item.description;

  const linkWrap = document.createElement("div");
  linkWrap.className = "company-external-link";
  const link = document.createElement("a");
  link.href = item.externalLink.href;
  link.textContent = item.externalLink.text;
  link.className = "company-external-link__anchor";
  if (item.externalLink.href === "#") {
    link.addEventListener("click", (e) => e.preventDefault());
  } else {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  const arrow = document.createElement("span");
  arrow.className = "company-external-link__icon";
  arrow.setAttribute("aria-hidden", "true");
  linkWrap.appendChild(link);
  linkWrap.appendChild(arrow);

  section.appendChild(header);
  section.appendChild(description);
  section.appendChild(linkWrap);
  section.appendChild(createScreens(item.screens));

  return section;
}

function renderDesktopSections() {
  experiences.forEach((item, index) => {
    experienceNav.appendChild(createNavButton(item, index));

    const section = document.createElement("section");
    section.className = "company-section";
    section.id = `section-${item.id}`;
    section.dataset.company = item.id;

    const header = document.createElement("div");
    header.className = "company-header";
    header.appendChild(renderIcon(item.logo, true));

    const meta = document.createElement("div");
    meta.className = "company-meta";

    const title = document.createElement("h2");
    title.textContent = item.name;
    meta.appendChild(title);

    const role = document.createElement("p");
    role.textContent = item.role;
    meta.appendChild(role);

    header.appendChild(meta);

    const description = document.createElement("p");
    description.className = "company-description";
    description.textContent = item.description;

    section.appendChild(header);
    section.appendChild(description);
    section.appendChild(createCaseLinks(item.cases, null, item.id));
    section.appendChild(createScreens(item.screens));

    desktopSections.appendChild(section);
  });

  secondaryCompanies.forEach((item) => {
    desktopSections.appendChild(renderSecondarySection(item));
  });

  secondaryItems.forEach((item) => {
    secondaryNav.appendChild(createSecondaryItem(item));
  });
}

const allMobileCompanies = [
  ...experiences.map((e) => ({ ...e, type: "experience" })),
  ...secondaryCompanies.map((s) => ({ ...s, type: "secondary" })),
];

function renderMobileNav() {
  experiences.forEach((item, index) => {
    mobileExperienceNav.appendChild(createNavButton(item, index, true));
  });

  secondaryItems.forEach((item, index) => {
    const li = document.createElement("li");
    const secData = secondaryCompanies.find((c) => c.name === item.name);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-item";
    button.appendChild(createSecondaryIcon(item));
    const label = document.createElement("span");
    label.className = "nav-item__label";
    label.textContent = item.name;
    button.appendChild(label);
    if (secData) {
      const mobileIdx = experiences.length + secondaryCompanies.indexOf(secData);
      button.addEventListener("click", () => {
        currentMobileIndex = mobileIdx;
        renderMobileCompany();
        closeMenu();
      });
    }
    li.appendChild(button);
    mobileSecondaryNav.appendChild(li);
  });
}

function renderMobileCompany() {
  const item = allMobileCompanies[currentMobileIndex];
  mobileCompany.innerHTML = "";
  mobileCompany.dataset.company = item.id || "";

  const header = document.createElement("div");
  header.className = "mobile-company__header";

  let logoEl;
  if (item.type === "secondary") {
    logoEl = document.createElement("div");
    logoEl.className = "mobile-company__logo";
    if (item.logoBg) logoEl.style.background = item.logoBg;
    if (item.logoSrc) {
      const img = document.createElement("img");
      img.src = item.logoSrc;
      img.alt = "";
      logoEl.appendChild(img);
    }
  } else {
    logoEl = renderIcon(item.logo, true);
    logoEl.classList.add("mobile-company__logo");
  }
  header.appendChild(logoEl);

  const meta = document.createElement("div");
  const title = document.createElement("h2");
  title.className = "mobile-company__title";
  title.textContent = item.name;

  const role = document.createElement("p");
  role.className = "mobile-company__role";
  if (item.roleVariant === "offer") {
    role.classList.add("mobile-company__role--offer");
  }
  role.textContent = item.role;

  meta.appendChild(title);
  meta.appendChild(role);
  header.appendChild(meta);

  const description = document.createElement("p");
  description.className = "mobile-company__description";
  description.textContent = item.description;

  mobileCompany.appendChild(header);
  mobileCompany.appendChild(description);

  if (item.type === "secondary" && item.externalLink) {
    const linkWrap = document.createElement("div");
    linkWrap.className = "company-external-link company-external-link--mobile";
    const link = document.createElement("a");
    link.href = item.externalLink.href;
    link.textContent = item.externalLink.text;
    link.className = "company-external-link__anchor";
    if (item.externalLink.href === "#") {
      link.addEventListener("click", (e) => e.preventDefault());
    } else {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    const arrow = document.createElement("span");
    arrow.className = "company-external-link__icon";
    arrow.setAttribute("aria-hidden", "true");
    linkWrap.appendChild(link);
    linkWrap.appendChild(arrow);
    mobileCompany.appendChild(linkWrap);
  } else if (item.type === "experience") {
    mobileCompany.appendChild(createCaseLinks(item.cases, "mobile", item.id));
  }

  mobileCompany.appendChild(createScreens(item.screens, true));
}

function syncActiveNav(id) {
  document.querySelectorAll(".nav-item[data-target]").forEach((item) => {
    const isActive = item.dataset.target === id;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setupObserver() {
  const sections = document.querySelectorAll(".company-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          syncActiveNav(entry.target.dataset.company);
        }
      });
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
  syncActiveNav(experiences[0].id);
}

function openMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
mobileMenu.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    closeMenu();
  }
});

nextCompanyButton.addEventListener("click", () => {
  currentMobileIndex = (currentMobileIndex + 1) % allMobileCompanies.length;
  renderMobileCompany();
});

renderDesktopSections();
renderMobileNav();
renderMobileCompany();
setupObserver();
setupScrollReveal();

let toastTimer = null;

function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("site-toast--hidden");
  toast.classList.add("site-toast--visible");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("site-toast--visible");
    toast.classList.add("site-toast--hidden");
  }, 3000);
}

function setupScrollReveal() {
  const sections = document.querySelectorAll("#desktop-sections .company-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.04 }
  );

  sections.forEach((section, i) => {
    section.classList.add("reveal");
    // Лёгкий стаггер для первых 2 секций, которые могут быть сразу видны
    if (i < 2) {
      section.style.transitionDelay = i * 0.08 + "s";
    }
    observer.observe(section);
  });
}
