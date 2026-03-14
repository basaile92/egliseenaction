// === HEADER SCROLL ===
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// === MENU MOBILE ===
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
  document.querySelectorAll('.nav-list a').forEach(l => l.addEventListener('click', () => navList.classList.remove('open')));
}

// === HERO SLIDER ===
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current]?.classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current]?.classList.add('active');
}

if (slides.length > 1) {
  dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
  setInterval(() => goToSlide(current + 1), 7000);
}

// === COUNTER ANIMATION ===
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const step = target / (duration / 16);
  let val = 0;
  const timer = setInterval(() => {
    val = Math.min(val + step, target);
    el.textContent = Math.floor(val) + (target >= 100 ? '+' : '');
    if (val >= target) clearInterval(timer);
  }, 16);
}

const counters = document.querySelectorAll('.stat-number');
if (counters.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(c => obs.observe(c));
}

// === DEPARTMENTS MODAL ===
const descriptions = {
  ados: { title: "Ados", description: "« Que personne ne méprise ta jeunesse ; mais sois un modèle pour les croyants, en parole, en conduite, en amour, en foi, en pureté. » (1 Timothée 4:12)\n\nCe département invite les adolescents à grandir dans leur foi et à découvrir leur identité en Christ. Avec des enseignements adaptés, des ateliers et des activités ludiques, il prépare les jeunes à naviguer dans la vie avec des valeurs chrétiennes solides. Si tu as entre 11 et 17 ans et que tu es prêt à explorer ta foi tout en vivant des moments fun et enrichissants, rejoins-nous !" },
  aines: { title: "Aînés", description: "« Les cheveux blancs sont une couronne d'honneur » (Proverbes 16:31)\n\nCe département honore les aînés en leur offrant un espace pour partager leur sagesse et continuer à grandir dans leur foi. À travers des rencontres fraternelles, des enseignements et des moments de prière, les aînés trouvent soutien et encouragement. Si tu as plus de 60 ans, rejoins-nous et trouve une vraie famille !" },
  accueil: { title: "Accueil", description: "« Je me réjouis quand on me dit : Allons à la maison de l'Éternel ! » (Psaume 122:1)\n\nCe département est la première porte de l'église. L'équipe accueille chaleureusement chaque membre et visiteur, facilitant leur installation à chaque réunion et célébration. Si tu as le sourire facile et que tu désires mettre les autres à l'aise, rejoins l'équipe !" },
  diligents: { title: "Diligents", description: "« Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes. » (Colossiens 3:23)\n\nCe département aide les membres de l'église à s'épanouir dans leurs projets professionnels. Formations, conseils et partages d'expériences les accompagnent dans leur carrière ou l'entrepreneuriat." },
  femmes: { title: "Femmes", description: "« La femme sage bâtit sa maison » (Proverbes 14:1)\n\nCe département encourage les femmes à jouer un rôle clé dans leur foyer et leur communauté par leur foi. Enseignements, ateliers pratiques et prières collectives les aident à s'épanouir spirituellement et personnellement." },
  intercession: { title: "Intercession", description: "« Priez sans cesse » (1 Thessaloniciens 5:17)\n\nCe département soutient l'église par une prière fervente et constante. Des temps de jeûne, des prières collectives et des veillées de ciel ouvert sont organisés pour porter les besoins de l'église et du monde." },
  "jeunes-adultes": { title: "Jeunes Adultes", description: "« Souvenez-vous de votre Créateur pendant les jours de votre jeunesse » (Ecclésiaste 12:1)\n\nCe département encourage les jeunes adultes à bâtir une vie fondée sur la foi et la maturité spirituelle. Si tu as entre 18 et 35 ans, viens vivre cette expérience avec nous !" },
  kids: { title: "Kids", description: "« Instruis l'enfant selon la voie qu'il doit suivre » (Proverbes 22:6)\n\nCe département plante les premières graines de la foi dans le cœur des tout-petits. À travers des histoires bibliques, des chants et des activités créatives, les enfants découvrent l'amour de Dieu. Pour les 3 à 10 ans." },
  louange: { title: "Louange", description: "« Que tout ce qui respire loue l'Éternel » (Psaume 150:6)\n\nCe département guide l'église dans l'adoration pour glorifier Dieu. Chantres et musiciens travaillent ensemble pour créer une atmosphère propice à la présence de Dieu lors des cultes et réunions." },
  menage: { title: "Ménage", description: "« Tout doit se faire avec bienséance et avec ordre » (1 Corinthiens 14:40)\n\nCe département assure un environnement propre pour glorifier Dieu. Grâce à un entretien régulier et soigné, l'église reste accueillante et agréable pour tous." },
  nouveaux: { title: "Nouveaux Arrivants", description: "« Accueillez-vous les uns les autres, comme Christ nous a accueillis » (Romains 15:7)\n\nCe département veille à intégrer chaque nouvel arrivant dans la famille de Dieu. À travers des rencontres d'accueil, il facilite l'intégration des nouveaux membres." },
  securite: { title: "Sécurité", description: "« Veillez donc, car vous ne savez ni le jour ni l'heure » (Matthieu 25:13)\n\nCe département veille à garantir la sérénité et la sécurité des rassemblements. Une équipe dévouée assure le bon déroulement des cultes dans un cadre ordonné et paisible." },
  travaux: { title: "Travaux", description: "« L'Éternel est mon rocher, ma forteresse, mon libérateur » (Psaume 18:2)\n\nCe département bâtit un espace solide et adapté pour accueillir l'église. Grâce à des rénovations et des améliorations constantes, les locaux restent fonctionnels et accueillants." }
};

const panel = document.getElementById('dept-panel');
const panelTitle = document.getElementById('dept-panel-title');
const panelVerse = document.getElementById('dept-panel-verse');
const panelText = document.getElementById('dept-panel-text');
const panelClose = document.querySelector('.dept-panel-close');
const panelArrow = document.querySelector('.dept-panel-arrow');
let activeKey = null;

function parseDescription(desc) {
  const match = desc.match(/^(«[^»]+»\s*\([^)]+\))\s*\n\n([\s\S]*)$/);
  if (match) return { verse: match[1], text: match[2] };
  return { verse: '', text: desc };
}

function closePanel() {
  panel?.classList.remove('open');
  document.querySelectorAll('.dept-btn.active').forEach(b => b.classList.remove('active'));
  activeKey = null;
}

function positionArrow(btn) {
  if (!panelArrow || !panel) return;
  const btnRect = btn.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const center = btnRect.left + btnRect.width / 2 - panelRect.left;
  panelArrow.style.left = center + 'px';
}

document.querySelectorAll('.dept-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.dept;
    if (!descriptions[key]) return;

    if (activeKey === key) { closePanel(); return; }

    const { verse, text } = parseDescription(descriptions[key].description);
    panelTitle.textContent = descriptions[key].title;
    panelVerse.textContent = verse;
    panelVerse.style.display = verse ? '' : 'none';
    panelText.textContent = text;

    document.querySelectorAll('.dept-btn.active').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    panel?.classList.add('open');
    activeKey = key;

    // Position arrow after panel opens
    requestAnimationFrame(() => positionArrow(btn));
    setTimeout(() => panel?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
  });
});

panelClose?.addEventListener('click', closePanel);

// === FAQ ===
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question')?.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

// === AMOUNT BUTTONS ===
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// === SCROLL REVEAL ===
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObs.observe(el));
}
