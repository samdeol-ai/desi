/* shared.js — injects nav + footer, handles mobile burger + dropdowns */
(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html';

  function active(name) { return page === name ? ' class="active"' : ''; }
  function activeBtn(name) { return page === name ? ' class="nav-parent-btn active"' : ' class="nav-parent-btn"'; }

  var nav = '<nav class="nav" id="site-nav">'
    + '<div class="nav-inner">'
    + '<a href="index.html" class="nav-logo">Desi <em>Theatre</em></a>'
    + '<ul class="nav-links" id="nav-links">'
    + '<li class="nav-item"><a href="index.html"' + active('index.html') + '>Home</a></li>'
    + '<li class="nav-item">'
    +   '<button' + activeBtn('shows.html') + ' aria-haspopup="true">Shows <span class="nav-chevron"></span></button>'
    +   '<ul class="nav-dropdown" role="menu">'
    +     '<li><a href="shows.html">Current Show</a></li>'
    +     '<li><a href="shows.html#past">Past Productions</a></li>'
    +     '<div class="nav-dd-divider"></div>'
    +     '<li><a href="shows.html">Book Tickets</a></li>'
    +   '</ul>'
    + '</li>'
    + '<li class="nav-item"><a href="about.html"' + active('about.html') + '>About</a></li>'
    + '<li class="nav-item">'
    +   '<button' + activeBtn('team.html') + ' aria-haspopup="true">The Company <span class="nav-chevron"></span></button>'
    +   '<ul class="nav-dropdown" role="menu">'
    +     '<li><a href="team.html">Meet the Team</a></li>'
    +     '<li><a href="join.html">Volunteer With Us</a></li>'
    +     '<li><a href="join.html#auditions">Auditions</a></li>'
    +   '</ul>'
    + '</li>'
    + '<li class="nav-item"><a href="contact.html"' + active('contact.html') + '>Contact</a></li>'
    + '</ul>'
    + '<button class="nav-burger" id="nav-burger" aria-label="Toggle menu"><span></span><span></span><span></span></button>'
    + '<a class="nav-cta" href="shows.html">&#127917; Book Tickets</a>'
    + '</div>'
    + '</nav>';

  var footer = '<footer class="footer"><div class="footer-inner">'
    + '<div class="footer-top">'
    + '<div>'
    +   '<div class="footer-logo">Desi <em>Theatre</em></div>'
    +   '<p class="footer-desc">Bay Area\'s Hindi comedy community theatre. Rooted in culture, powered by volunteers, driven by laughter since 2024.</p>'
    +   '<span class="nonprofit-pill">&#10003; Non-profit 501(c) Registered</span>'
    + '</div>'
    + '<div class="footer-col"><div class="footer-col-title">Navigate</div><ul>'
    +   '<li><a href="index.html">Home</a></li>'
    +   '<li><a href="shows.html">Current Show</a></li>'
    +   '<li><a href="shows.html#past">Past Productions</a></li>'
    +   '<li><a href="about.html">About Us</a></li>'
    +   '<li><a href="team.html">The Company</a></li>'
    + '</ul></div>'
    + '<div class="footer-col"><div class="footer-col-title">Get Involved</div><ul>'
    +   '<li><a href="join.html">Volunteer</a></li>'
    +   '<li><a href="join.html#auditions">Auditions</a></li>'
    +   '<li><a href="https://www.zeffy.com/donation-form/48fbff1d-6cfd-417b-a36d-4b484be8253f" target="_blank">Donate</a></li>'
    +   '<li><a href="contact.html">Partner With Us</a></li>'
    + '</ul></div>'
    + '<div class="footer-col"><div class="footer-col-title">Contact</div>'
    +   '<div class="footer-contact-item"><span>&#9742;</span><span>510-926-6339</span></div>'
    +   '<div class="footer-contact-item"><span>&#9993;</span><span>contact@desitheatre.com</span></div>'
    +   '<div class="footer-contact-item"><span>&#128205;</span><span>5068 Calwa Ct, San Jose CA 95111</span></div>'
    + '</div>'
    + '</div>'
    + '<div class="footer-bottom">'
    +   '<span class="footer-copy">&copy; 2026 Desi Theatre Company. All rights reserved.</span>'
    +   '<div class="social-links">'
    +     '<a href="https://www.instagram.com/desi_theatre/" target="_blank">Instagram</a>'
    +     '<a href="https://www.facebook.com/desitheatre" target="_blank">Facebook</a>'
    +   '</div>'
    + '</div></div></footer>';

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  document.addEventListener('DOMContentLoaded', function () {
    var burger  = document.getElementById('nav-burger');
    var navList = document.getElementById('nav-links');

    /* Mobile burger */
    if (burger && navList) {
      burger.addEventListener('click', function () {
        var open = navList.classList.toggle('open');
        burger.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }

    /* Dropdown parent button clicks */
    document.querySelectorAll('.nav-parent-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var item = btn.closest('.nav-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-item.open').forEach(function (el) { el.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
        e.stopPropagation();
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function () {
      document.querySelectorAll('.nav-item.open').forEach(function (el) { el.classList.remove('open'); });
    });

    /* Close mobile menu on link click */
    if (navList) {
      navList.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          navList.classList.remove('open');
          if (burger) burger.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    /* Close mobile nav on resize */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        if (navList) navList.classList.remove('open');
        if (burger) burger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

})();
