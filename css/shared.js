/* shared.js — injects nav + footer. Uses root-relative paths for GitHub Pages. */
(function () {
  var path = window.location.pathname;
  var page = path.split('/').pop();

  function active(name) {
    return page === name ? ' class="active"' : '';
  }

  var nav = [
    '<nav class="nav">',
    '  <div class="nav-inner">',
    '    <a href="index.html" class="nav-logo">Desi <em>Theatre</em></a>',
    '    <ul class="nav-links">',
    '      <li><a href="index.html"' + active('index.html') + '>Home</a></li>',
    '      <li><a href="shows.html"' + active('shows.html') + '>Shows</a></li>',
    '      <li><a href="about.html"' + active('about.html') + '>About</a></li>',
    '      <li><a href="team.html"' + active('team.html') + '>The Company</a></li>',
    '      <li><a href="join.html"' + active('join.html') + '>Join Us</a></li>',
    '      <li><a href="contact.html"' + active('contact.html') + '>Contact</a></li>',
    '    </ul>',
    '    <div class="nav-right">',
    '      <a class="btn btn-primary btn-sm" href="shows.html">Book Tickets</a>',
    '    </div>',
    '  </div>',
    '</nav>'
  ].join('\n');

  var footer = [
    '<footer class="footer">',
    '  <div class="footer-inner">',
    '    <div class="footer-top">',
    '      <div>',
    '        <div class="footer-logo">Desi <em>Theatre</em></div>',
    '        <p class="footer-desc">Bay Area\'s Hindi comedy community theatre. Rooted in culture, powered by volunteers, driven by laughter since 2024.</p>',
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
    '        <div class="footer-contact-item"><span>&#9742;</span> 510-926-6339</div>',
    '        <div class="footer-contact-item"><span>&#9993;</span> contact@desitheatre.com</div>',
    '        <div class="footer-contact-item"><span>&#128205;</span> 5068 Calwa Ct, San Jose CA 95111</div>',
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
})();
