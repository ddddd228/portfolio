(function () {
  // Роутинг через hash: case.html#emcd/1
  var hash = window.location.hash.replace(/^#/, "");
  var hashParts = hash.split("/");
  var companyId = hashParts[0] || "emcd";
  var caseIndex = Math.max(0, parseInt(hashParts[1], 10) || 0);

  var pages = window.CASE_PAGES && window.CASE_PAGES[companyId];
  if (!pages || !pages.length) {
    companyId = "emcd";
    pages = window.CASE_PAGES.emcd;
  }
  var totalCases = pages.length;
  caseIndex = Math.min(caseIndex, totalCases - 1);

  var backUrl = (window.CASE_BACK_URL && window.CASE_BACK_URL[companyId]) || "index.html";
  var caseData = pages[caseIndex];

  function makeIcon(item, isSecondary) {
    var icon = document.createElement("div");
    if (isSecondary) {
      icon.className = "nav-icon nav-icon--secondary " + (item.className || "");
    } else {
      icon.className = "nav-icon nav-icon--" + (item.iconType || "");
    }
    if (item.logo) {
      var img = document.createElement("img");
      img.src = item.logo;
      img.alt = "";
      icon.appendChild(img);
    }
    return icon;
  }

  function renderSidebar() {
    var expNav = document.getElementById("case-experience-nav");
    var secNav = document.getElementById("case-secondary-nav");
    var expNavM = document.getElementById("case-mobile-experience-nav");
    var secNavM = document.getElementById("case-mobile-secondary-nav");
    var exp = window.CASE_NAV_EXPERIENCE || [];
    var sec = window.CASE_NAV_SECONDARY || [];

    function addExpNav(container, items) {
      if (!container) return;
      items.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "index.html#section-" + (item.id || "");
        a.className = "nav-item" + (item.id === companyId ? " is-active" : "");
        a.setAttribute("aria-current", item.id === companyId ? "true" : "false");
        a.appendChild(makeIcon(item, false));
        var label = document.createElement("span");
        label.className = "nav-item__label";
        label.textContent = item.name;
        a.appendChild(label);
        li.appendChild(a);
        container.appendChild(li);
      });
    }

    function addSecNav(container, items) {
      if (!container) return;
      items.forEach(function (item) {
        var li = document.createElement("li");
        var div = document.createElement("div");
        div.className = "nav-item is-disabled";
        div.appendChild(makeIcon(item, true));
        var label = document.createElement("span");
        label.className = "nav-item__label";
        label.textContent = item.name;
        div.appendChild(label);
        li.appendChild(div);
        container.appendChild(li);
      });
    }

    [expNav, expNavM].forEach(function (el) {
      if (!el) return;
      el.innerHTML = "";
      addExpNav(el, exp);
    });
    [secNav, secNavM].forEach(function (el) {
      if (!el) return;
      el.innerHTML = "";
      addSecNav(el, sec);
    });
  }

  function renderContent(containerId) {
    var container = document.getElementById(containerId);
    if (!container || !caseData) return;

    var html = "";

    if (caseData.tags && caseData.tags.length) {
      html += '<div class="case-tags">' + caseData.tags.map(function (t) { return '<span>' + t + '</span>'; }).join("") + "</div>";
    }
    html += '<h1 class="case-title">' + escapeHtml(caseData.title) + "</h1>";
    if (caseData.subtitle) {
      html += '<p class="case-subtitle">' + escapeHtml(caseData.subtitle) + "</p>";
    }

    (caseData.sections || []).forEach(function (sec) {
      html += '<div class="case-section">';

      // Если imagesFirst — картинки идут перед заголовком и текстом
      if (sec.imagesFirst && sec.images && sec.images.length) {
        html += renderImages(sec);
      }

      if (sec.heading) {
        html += "<h3>" + escapeHtml(sec.heading) + "</h3>";
      }
      if (sec.body) {
        html += "<p>" + escapeHtml(sec.body) + "</p>";
      }
      // caption идёт после изображений (если не imagesFirst — он ниже)
      if (sec.listItems && sec.listItems.length) {
        html += '<ul class="case-list-items">';
        sec.listItems.forEach(function (item) {
          html += '<li class="case-list-item"><strong>' + escapeHtml(item.label) + "</strong> " +
            '<span class="case-caption">' + escapeHtml(item.text) + "</span></li>";
        });
        html += "</ul>";
      }
      if (sec.bulletItems && sec.bulletItems.length) {
        html += '<ul class="case-bullet-list">';
        sec.bulletItems.forEach(function (text) {
          html += '<li>' + escapeHtml(text) + '</li>';
        });
        html += "</ul>";
      }
      if (sec.blocks && sec.blocks.length) {
        html += '<div class="case-blocks">';
        sec.blocks.forEach(function (block) {
          html += '<div class="case-block">';
          if (block.body) {
            html += "<p>" + escapeHtml(block.body) + "</p>";
          }
          if (block.bulletItems && block.bulletItems.length) {
            block.bulletItems.forEach(function (text) {
              html += '<ul class="case-block-list"><li>' + escapeHtml(text) + "</li></ul>";
            });
          }
          html += "</div>";
        });
        html += "</div>";
      }
      if (sec.problemCards && sec.problemCards.length) {
        html += '<div class="case-problem-cards">';
        sec.problemCards.forEach(function (text) {
          html += '<div class="card">' + escapeHtml(text) + "</div>";
        });
        html += "</div>";
      }
      // Изображения (кроме imagesFirst — они уже отрендерены выше)
      if (!sec.imagesFirst && sec.images && sec.images.length) {
        html += renderImages(sec);
      }

      if (sec.hypothesisCards && sec.hypothesisCards.length) {
        html += '<div class="case-hypothesis-cards">';
        sec.hypothesisCards.forEach(function (card) {
          html += '<div class="hyp-card">';
          if (card.metrics && card.metrics.length) {
            html += '<div class="hyp-card__metrics">';
            card.metrics.forEach(function (m) {
              html += '<span class="hyp-card__metric" style="background:' + escapeAttr(m.bg) + '">' + escapeHtml(m.text) + '</span>';
            });
            html += '</div>';
          }
          if (card.description) {
            html += '<p class="hyp-card__desc">' + escapeHtml(card.description) + '</p>';
          }
          if (card.ratio) {
            html += '<span class="hyp-card__ratio">' + escapeHtml(card.ratio) + '</span>';
          }
          html += '</div>';
        });
        html += '</div>';
      }
      if (sec.body2) {
        html += "<p>" + escapeHtml(sec.body2) + "</p>";
      }
      if (sec.caption) {
        html += '<p class="case-caption">' + escapeHtml(sec.caption) + "</p>";
      }

      html += "</div>";
    });

    function renderImages(sec) {
      var out = "";
      var hasLabels = sec.images.some(function (img) { return img.label; });
      var layoutClass = sec.mediaLayout ? " case-media--" + sec.mediaLayout : "";

      // asis-wide: карточка "как было" — изображения обрезаны снизу
      if (sec.mediaLayout === "asis-wide") {
        out += '<div class="case-media case-media--asis-wide">';
        if (sec.beforeLabel) {
          out += '<p class="case-caption">' + escapeHtml(sec.beforeLabel) + '</p>';
        }
        out += '<div class="asis-row">';
        sec.images.forEach(function (img) {
          out += '<div class="asis-img-clip"><img src="' + escapeAttr(img.src) + '" alt=""></div>';
        });
        out += '</div>';
        out += '</div>';
        return out;
      }

      // before-only layout (только "как было" без "как стало")
      if (sec.beforeLabel && !sec.afterLabel) {
        out += '<div class="case-media' + layoutClass + '">';
        out += '<div class="before-group">';
        out += '<p class="case-caption">' + escapeHtml(sec.beforeLabel) + "</p>";
        out += '<div class="media-row">';
        sec.images.forEach(function (img) {
          var ss = img.w && img.h ? ' style="--w:' + Number(img.w) + ';--h:' + Number(img.h) + ';"' : "";
          out += '<div class="case-media-item"' + ss + '><img src="' + escapeAttr(img.src) + '" alt=""></div>';
        });
        out += "</div>";
        out += "</div>";
        out += "</div>";
      } else
      // before/after layout
      if (sec.beforeLabel && sec.afterLabel && sec.images.length === 4) {
        out += '<div class="case-media' + layoutClass + '">';

        out += '<div class="before-group">';
        out += '<p class="case-caption">' + escapeHtml(sec.beforeLabel) + "</p>";
        out += '<div class="media-row">';
        for (var i = 0; i < 2; i++) {
          var img = sec.images[i];
          var ss = img.w && img.h ? ' style="--w:' + Number(img.w) + ';--h:' + Number(img.h) + ';"' : "";
          out += '<div class="case-media-item"' + ss + '><img src="' + escapeAttr(img.src) + '" alt=""></div>';
        }
        out += "</div>";
        out += "</div>";

        out += '<div class="after-group">';
        out += '<p class="case-caption">' + escapeHtml(sec.afterLabel) + "</p>";
        out += '<div class="media-row">';
        for (var j = 2; j < 4; j++) {
          var img2 = sec.images[j];
          var ss2 = img2.w && img2.h ? ' style="--w:' + Number(img2.w) + ';--h:' + Number(img2.h) + ';"' : "";
          out += '<div class="case-media-item"' + ss2 + '><img src="' + escapeAttr(img2.src) + '" alt=""></div>';
        }
        out += "</div>";
        out += "</div>";

        out += "</div>";
      } else {
        out += '<div class="case-media' + (hasLabels ? " case-media--labeled" : "") + layoutClass + '">';
        sec.images.forEach(function (img) {
          var ss = img.w && img.h ? ' style="--w:' + Number(img.w) + ';--h:' + Number(img.h) + ';"' : "";
          if (img.placeholder) {
            out += '<div class="case-media-placeholder" style="min-height:' + (img.h || 200) + 'px"></div>';
          } else if (img.src) {
            if (img.label) {
              out += '<figure class="case-media-figure"' + ss + '>';
              out += '<img src="' + escapeAttr(img.src) + '" alt="">';
              out += '<figcaption>' + escapeHtml(img.label) + "</figcaption>";
              out += "</figure>";
            } else {
              out += '<div class="case-media-item"' + ss + '><img src="' + escapeAttr(img.src) + '" alt=""></div>';
            }
          }
        });
        out += "</div>";
      }
      return out;
    }

    if (caseData.results && caseData.results.length) {
      html += '<div class="case-results"><h3>Результаты</h3><ul>';
      caseData.results.forEach(function (r) {
        html += "<li>" + escapeHtml(r) + "</li>";
      });
      html += "</ul></div>";
    }

    html += buildCaseNavCards();

    container.innerHTML = html;
  }

  function buildCaseNavCards() {
    var hasPrev = caseIndex > 0;
    var hasNext = caseIndex < totalCases - 1;

    if (!hasPrev && !hasNext) return "";

    var prevUrl = "case.html#" + encodeURIComponent(companyId) + "/" + (caseIndex - 1);
    var nextUrl = "case.html#" + encodeURIComponent(companyId) + "/" + (caseIndex + 1);

    var prevTitle = hasPrev ? escapeHtml(pages[caseIndex - 1].title || "") : "";
    var nextTitle = hasNext ? escapeHtml(pages[caseIndex + 1].title || "") : "";

    var html = '<div class="case-nav-cards">';

    if (hasPrev) {
      html += '<a href="' + prevUrl + '" class="case-nav-card case-nav-card--prev' + (!hasNext ? " case-nav-card--solo" : "") + '">';
      html += '<span class="case-nav-card__dir">← предыдущий кейс</span>';
      html += '<span class="case-nav-card__title">' + prevTitle + '</span>';
      html += "</a>";
    }

    if (hasNext) {
      html += '<a href="' + nextUrl + '" class="case-nav-card case-nav-card--next' + (!hasPrev ? " case-nav-card--solo" : "") + '">';
      html += '<span class="case-nav-card__dir">следующий кейс →</span>';
      html += '<span class="case-nav-card__title">' + nextTitle + '</span>';
      html += "</a>";
    }

    html += "</div>";
    return html;
  }

  function escapeHtml(s) {
    var div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }
  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function setBackLink() {
    var back = document.getElementById("case-back");
    if (back) back.href = backUrl;
  }

  function setTitle() {
    document.title = (caseData.title ? caseData.title.slice(0, 50) + " — " : "") + "Данила Аракелов";
  }

  function initMobileNextBack() {
    var btn = document.getElementById("case-next-btn");
    if (!btn) return;

    if (caseIndex < totalCases - 1) {
      btn.textContent = "следующий кейс";
      btn.onclick = function () {
        window.location.href = "case.html#" + encodeURIComponent(companyId) + "/" + (caseIndex + 1);
      };
    } else {
      btn.textContent = "назад";
      btn.onclick = function () {
        if (caseIndex > 0) {
          window.location.href = "case.html#" + encodeURIComponent(companyId) + "/" + (caseIndex - 1);
        } else {
          window.location.href = backUrl;
        }
      };
    }
  }

  function initMobileMenu() {
    var openBtn = document.getElementById("case-menu-toggle");
    var closeBtn = document.getElementById("case-menu-close");
    var menu = document.getElementById("case-mobile-menu");
    if (!menu) return;

    function open() {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
    }
    function close() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
    }

    if (openBtn) openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    menu.addEventListener("click", function (e) {
      if (e.target === menu) close();
    });
  }

  function initHeaderShadow() {
    var header = document.getElementById("case-header");
    var scrollEl = document.querySelector(".case-mobile-scroll");
    if (!header || !scrollEl) return;

    scrollEl.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", scrollEl.scrollTop > 10);
    });
  }

  renderSidebar();
  setBackLink();
  setTitle();
  renderContent("case-content");
  renderContent("case-content-mobile");
  setupScrollReveal("case-content");
  setupScrollReveal("case-content-mobile");
  initMobileNextBack();
  initMobileMenu();
  initHeaderShadow();

  // При смене хэша (клик по карточке next/prev внутри case.html) — перезагрузить страницу
  window.addEventListener("hashchange", function () {
    window.location.reload();
  });

  function setupScrollReveal(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var elements = container.querySelectorAll(".case-tags, .case-section, .case-nav-card, .case-nav-cards");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.04 }
    );

    elements.forEach(function (el, i) {
      el.classList.add("reveal");
      // Лёгкий стаггер для первых 3 видимых элементов при загрузке
      if (i < 3) {
        el.style.transitionDelay = i * 0.07 + "s";
      }
      observer.observe(el);
    });
  }
})();
