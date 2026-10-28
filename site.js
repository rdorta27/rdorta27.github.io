/* Theme toggle, scroll reveal, timeline and diagrams. The pages work without this file. */
(function () {
  var root = document.documentElement;

  // Theme: deep blue by default; the cream view is the remembered alternative.
  var btn = document.querySelector(".theme-toggle");
  function label() { btn.setAttribute("aria-label", root.dataset.theme === "light" ? btn.dataset.toDark : btn.dataset.toLight); }
  if (btn) {
    label();
    btn.addEventListener("click", function () {
      var next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
  }

  // Sticky header: a hairline appears once the page scrolls under it.
  var top = document.querySelector("header.top");
  function stuck() { if (top) top.classList.toggle("stuck", window.scrollY > 4); }
  window.addEventListener("scroll", stuck, { passive: true });
  stuck();

  // Reveal: sections and timeline entries appear as they enter the viewport.
  var revealables = Array.prototype.slice.call(document.querySelectorAll(".reveal, .timeline .entry"));
  var timeline = document.querySelector(".timeline");
  function onScroll() {
    var h = window.innerHeight;
    revealables = revealables.filter(function (el) {
      if (el.getBoundingClientRect().top > h * 0.92) return true;
      el.classList.add("in");
      return false;
    });
    if (timeline) {
      var r = timeline.getBoundingClientRect();
      timeline.style.setProperty("--progress", Math.max(0, Math.min(1, (h * 0.6 - r.top) / r.height)).toFixed(3));
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // Diagrams: a row of steps (tabs) with one detail panel visible at a time.
  document.querySelectorAll("[data-tabs]").forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        t.classList.toggle("done", j < i);
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      box.querySelectorAll(".lane-item").forEach(function (el) {
        el.classList.toggle("active", el.dataset.steps.split(" ").indexOf(String(i)) !== -1);
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i); });
      t.addEventListener("keydown", function (e) {
        var k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select((i + k + tabs.length) % tabs.length, true); }
        if (e.key === "Home") { e.preventDefault(); select(0, true); }
        if (e.key === "End") { e.preventDefault(); select(tabs.length - 1, true); }
      });
    });
    select(0);

    // Optional overlay (the AI layer on the order-journey map): tags on each step, legend and AI column.
    var toggle = box.querySelector("[data-layer-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var on = toggle.getAttribute("aria-pressed") !== "true";
        toggle.setAttribute("aria-pressed", on);
        box.classList.toggle("layer-on", on);
      });
    }
  });
})();
