(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  function isMobileNav() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function close() {
    nav.classList.remove("is-open");
    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
  }

  function open() {
    nav.classList.add("is-open");
    btn.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
    document.body.classList.add("nav-open");
  }

  function toggle() {
    if (nav.classList.contains("is-open")) close();
    else open();
  }

  btn.addEventListener("click", function () {
    toggle();
  });

  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (isMobileNav()) close();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  window.addEventListener(
    "resize",
    function () {
      if (!isMobileNav()) close();
    },
    { passive: true }
  );
})();
