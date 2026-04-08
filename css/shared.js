/* shared.js — injects nav and footer into every page */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isRoot = currentPage === 'index.html' || currentPage === '';

  const prefix = isRoot ? '' : '../';

  const nav = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="${prefix}index.html" class="nav-logo">Desi <em>Theatre</em></a>
      <ul class="nav-links">
        <li><a href="${prefix}index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a></li>
        <li><a href="${prefix}pages/shows.html" ${currentPage === 'shows.html' ? 'class="active"' : ''}>Shows</a></li>
        <li><a href="${prefix}pages/about.html" ${currentPage === 'about.html' ? 'class="active"' : ''}>About</a></li>
        <li><a href="${prefix}pages/team.html" ${currentPage === 'team.html' ? 'class="active"' : ''}>The Company</a></li>
        <li><a href="${prefix}pages/join.html" ${currentPage === 'join.html' ? 'class="active"' : ''}>Join Us</a></li>
        <li><a href="${prefix}pages/contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
      </ul>
      <div class="nav-right">
        <a class="btn btn-primary btn-sm" href="${prefix}pages/shows.html">Book Tickets</a>
      </div>
    </div>
  </nav>`;

  const footer = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-logo">Desi <em>Theatre</em></div>
          <p class="footer-desc">Bay Area's Hindi comedy community theatre. Rooted in culture, powered by volunteers, driven by laughter since 2024.</p>
          <span class="nonprofit-pill">&#10003; Non-profit 501(c) Registered</span>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Navigate</div>
          <ul>
            <li><a href="${prefix}index.html">Home</a></li>
            <li><a href="${prefix}pages/shows.html">Current Show</a></li>
            <li><a href="${prefix}pages/shows.html#past">Past Productions</a></li>
            <li><a href="${prefix}pages/about.html">About Us</a></li>
            <li><a href="${prefix}pages/team.html">The Company</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Get Involved</div>
          <ul>
            <li><a href="${prefix}pages/join.html">Volunteer</a></li>
            <li><a href="${prefix}pages/join.html#auditions">Auditions</a></li>
            <li><a href="https://www.zeffy.com/donation-form/48fbff1d-6cfd-417b-a36d-4b484be8253f" target="_blank">Donate</a></li>
            <li><a href="${prefix}pages/contact.html">Partner With Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Contact</div>
          <div class="footer-contact-item"><span>&#9742;</span> 510-926-6339</div>
          <div class="footer-contact-item"><span>&#9993;</span> contact@desitheatre.com</div>
          <div class="footer-contact-item"><span>&#128205;</span> 5068 Calwa Ct,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;San Jose CA 95111</div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; 2026 Desi Theatre Company. All rights reserved.</span>
        <div class="social-links">
          <a href="https://www.instagram.com/desi_theatre/" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/desitheatre" target="_blank">Facebook</a>
        </div>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
