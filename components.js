// === SHARED COMPONENTS ===
// Header and footer injected from a single source of truth.

function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.outerHTML = `
  <header id="site-header" class="site-header">
    <div class="header-inner">
      <div class="logo">
        <a href="index.html"><img src="logo.webp" alt="Église en Action"></a>
      </div>
      <nav class="main-nav">
        <button class="nav-toggle" aria-label="Menu">&#9776;</button>
        <ul class="nav-list">
          <li><a href="index.html">Accueil</a></li>
          <li><a href="history.html">Notre histoire</a></li>
          <li><a href="nos-departements.html">Nos Départements</a></li>
          <li><a href="je-suis-nouveau.html">Je suis nouveau</a></li>
          <li><a href="devenir-membre.html">Devenir membre</a></li>
          <li><a href="don-en-ligne.html">Dons</a></li>
          <li><a href="contact.html" class="btn-nav">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.outerHTML = `
  <footer id="site-footer" class="site-footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>Nous contacter</h4>
            <ul class="footer-contact-list">
              <li><span class="footer-label">Email:</span> <a href="mailto:information@eglisenaction.fr">information@eglisenaction.fr</a></li>
              <li><span class="footer-label">Téléphone:</span> <a href="tel:+33139478657"><strong>01 39 47 86 57</strong></a></li>
              <li><span class="footer-label">Emplacement:</span> 29 Boulevard Karl Marx - 95100 Argenteuil</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Nous trouver</h4>
            <iframe class="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.5!2d2.2476!3d48.9472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66850c0b0c0c1%3A0x0!2s29+Bd+Karl+Marx%2C+95100+Argenteuil!5e0!3m2!1sfr!2sfr!4v1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="footer-col">
            <h4>Nous suivre</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/add.argenteuil" target="_blank" rel="noopener" class="social-btn facebook"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.6V10.6h3.2V8c0-3.2 1.9-5 4.7-5 1.4 0 2.8.2 3.2.3v3.7h-2.3c-1.8 0-2.2.8-2.2 2.1v2.6h4.3l-.6 4.2h-3.7V24h7.2c.8 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z"/></svg> Facebook</a>
              <a href="https://www.instagram.com/eglisenaction/" target="_blank" rel="noopener" class="social-btn instagram"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg> Instagram</a>
              <a href="https://www.youtube.com/@eea-egliseenactionargenteu2423" target="_blank" rel="noopener" class="social-btn youtube"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path d="M23.5 6.1c-.3-1.4-1.4-2.5-2.8-2.7C18.3 3 12 3 12 3s-6.3 0-8.7.4c-1.4.2-2.5 1.3-2.8 2.7C0 8.5 0 12 0 12s0 3.5.5 5.9c.3 1.4 1.4 2.5 2.8 2.7 2.4.4 8.7.4 8.7.4s6.3 0 8.7-.4c1.4-.2 2.5-1.3 2.8-2.7.5-2.4.5-5.9.5-5.9s0-3.5-.5-5.9zM9.7 15.4v-6.8l6.3 3.4-6.3 3.4z"/></svg> YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2024 Église en Action – Tous droits réservés | <a href="mentions-legales.html">Mentions légales</a></p>
      </div>
    </div>
  </footer>`;
}

// Run immediately
renderHeader();
renderFooter();
