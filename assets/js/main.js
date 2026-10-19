(function () {
  var root = document.documentElement;

  // ----- Theme toggle (remembers the choice; defaults to the system setting) -----
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ----- Mobile nav -----
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ----- Abstract / BibTeX toggles -----
  document.querySelectorAll(".pub .toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = btn.closest(".pub-body");
      var which = btn.getAttribute("data-target");
      ["abs", "bib"].forEach(function (name) {
        var panel = body.querySelector(".pub-extra." + name);
        var b = body.querySelector('.toggle[data-target="' + name + '"]');
        if (!panel) return;
        var show = name === which && panel.hidden;
        panel.hidden = !show;
        if (b) b.classList.toggle("active", show);
      });
    });
  });

  // ----- Figure lightbox -----
  var box = document.getElementById("lightbox");
  if (box) {
    var big = box.querySelector("img");
    document.querySelectorAll("img.zoomable").forEach(function (img) {
      img.addEventListener("click", function () {
        big.src = img.src;
        big.alt = img.alt;
        box.hidden = false;
      });
    });
    box.addEventListener("click", function () { box.hidden = true; });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") box.hidden = true; });
  }
})();
