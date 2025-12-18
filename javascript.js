// Tema claro/escuro
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

// Carregar tema salvo
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}

// Gerar projetos fictícios
const projects = [
  { title: "Dashboard Atlas", desc: "Interface interativa feita em JS puro.", link: "#" },
  { title: "Portfolio 2025", desc: "Layout criativo baseado em design editorial.", link: "#" },
  { title: "Landing EcoApp", desc: "Site sustentável com animações suaves.", link: "#" }
];

const grid = document.getElementById('projectGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href="${p.link}" target="_blank">Ver mais</a>`;
  grid.appendChild(card);

});
