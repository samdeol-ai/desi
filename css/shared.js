/* shared.js — nav + footer injected into every page */
(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  function a(name){ return page === name ? ' class="active"' : ''; }

  var nav = [
    '<nav class="nav" id="site-nav">',
    '  <div class="nav-inner">',
    '    <a href="index.html" class="nav-logo">Desi <em>Theatre</em></a>',
    '    <button class="nav-burger" id="nav-burger" aria-label="Open menu">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '    <ul class="nav-links" id="nav-links">',
    '      <li><a href="index.html"'+a('index.html')+'>Home</a></li>',
    '      <li><a href="shows.html"'+a('shows.html')+'>Shows</a></li>',
    '      <li><a href="about.html"'+a('about.html')+'>About</a></li>',
    '      <li><a href="team.html"'+a('team.html')+'>The Company</a></li>',
    '      <li><a href="join.html"'+a('join.html')+'>Join Us</a></li>',
    '      <li><a href="contact.html"'+a('contact.html')+'>Contact</a></li>',
    '    </ul>',
    '    <a class="btn btn-gold btn-sm nav-cta" href="shows.html">Book Tickets</a>',
    '  </div>',
    '</nav>'
  ].join('\n');

  var footer = [
    '<footer class="footer">',
    '  <div class="footer-inner">',
    '    <div class="footer-top">',
    '      <div>',
    '        <div class="footer-logo">Desi <em>Theatre</em></div>',
    '        <p class="footer-desc">Bay\'s Area\'s Hindi comedy community theatre. Rooted in culture, powered by volunteers, driven by laughter since 2024.</p>',
    '        <span class="nonprofit-pill">&#10003; Non-profit 501(c) Registered</span>',
    '      </div>',
    '      <div class="footer-col">',
    '        <div class="footer-col-title">Navigate</div>',
    '        <ul>',
    '          <li><a href="index.html">Home</a></li>',
    '          <li><a href="shows.html">Current Show</a></li>',
    '          <li><a href="shows.html#past">Past Productions</a></li>',
    '          <li><a href="about.html">About Us</a></li>',
    '          <li><a href="team.html">The Company</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="footer-col">',
    '        <div class="footer-col-title">Get Involved</div>',
    '        <ul>',
    '          <li><a href="join.html">Volunteer</a></li>',
    '          <li><a href="join.html#auditions">Auditions</a></li>',
    '          <li><a href="https://www.zeffy.com/donation-form/48fbff1d-6cfd-417b-a36d-4b484be8253f" target="_blank">Donate</a></li>',
    '          <li><a href="contact.html">Partner With Us</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="footer-col">',
    '        <div class="footer-col-title">Contact</div>',
    '        <div class="footer-contact-item"><span>&#9742;</span><span>510-926-6339</span></div>',
    '        <div class="footer-contact-item"><span>&#9993;</span><span>contact@desitheatre.com</span></div>',
    '        <div class="footer-contact-item"><span>&#128205;</span><span>5068 Calwa Ct, San Jose CA 95111</span></div>',
    '      </div>',
    '    </div>',
    '    <div class="footer-bottom">',
    '      <span class="footer-copy">&copy; 2026 Desi Theatre Company. All rights reserved.</span>',
    '      <div class="social-links">',
    '        <a href="https://www.instagram.com/desi_theatre/" target="_blank">Instagram</a>',
    '        <a href="https://www.facebook.com/desitheatre" target="_blank">Facebook</a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Mobile burger toggle
  document.addEventListener('DOMContentLoaded', function(){
    var burger = document.getElementById('nav-burger');
    var links  = document.getElementById('nav-links');
    var navEl  = document.getElementById('site-nav');
    if(!burger) return;
    burger.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
      navEl.classList.toggle('mobile-open', open);
    });
    // close on link click
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('open');
        burger.classList.remove('open');
        navEl.classList.remove('mobile-open');
      });
    });
  });
})();

  // Scroll → nav background
  (function(){
    function onScroll(){
      var nav = document.getElementById('site-nav');
      if(!nav) return;
      if(window.scrollY > 20){ nav.classList.add('scrolled'); }
      else { nav.classList.remove('scrolled'); }
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  })();
