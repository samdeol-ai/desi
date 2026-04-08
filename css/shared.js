/* shared.js — dropdown + burger behaviour only. Nav/footer are in HTML. */
(function () {
  document.addEventListener('DOMContentLoaded', function () {

    /* ── Burger ── */
    var burger  = document.getElementById('nav-burger');
    var navList = document.getElementById('nav-links');
    if (burger && navList) {
      burger.addEventListener('click', function () {
        var open = navList.classList.toggle('open');
        burger.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }

    /* ── Dropdown parent buttons ── */
    document.querySelectorAll('.nav-parent-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var item = btn.closest('.nav-item');
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-item.open').forEach(function (el) {
          el.classList.remove('open');
        });
        if (!wasOpen) item.classList.add('open');
        e.stopPropagation();
      });
    });

    /* ── Close on outside click ── */
    document.addEventListener('click', function () {
      document.querySelectorAll('.nav-item.open').forEach(function (el) {
        el.classList.remove('open');
      });
    });

    /* ── Close mobile nav on link click ── */
    if (navList) {
      navList.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          navList.classList.remove('open');
          if (burger) burger.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    /* ── Close mobile nav on resize ── */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        if (navList) navList.classList.remove('open');
        if (burger) burger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

  });
})();
