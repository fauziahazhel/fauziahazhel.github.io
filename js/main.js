// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 1400);
});
setTimeout(() => document.getElementById('loader').classList.add('done'), 3500);

// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// ===== REVEAL ON SCROLL =====
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== DATA (dengan skeleton loading) =====
const skills = [
  { icon: '🌐', name: 'HTML5', desc: 'Markup semantik & aksesibel' },
  { icon: '🎨', name: 'CSS3', desc: 'Layout modern & animasi' },
  { icon: '⚡', name: 'JavaScript', desc: 'JavaScript ES6+' },
  { icon: '💠', name: 'TypeScript', desc: 'Pengembangan type-safe' },
  { icon: '⚛️', name: 'React', desc: 'Antarmuka berbasis komponen' },
  { icon: '💨', name: 'Tailwind', desc: 'Styling utility-first' },
  { icon: '🟢', name: 'Node.js', desc: 'REST API & server-side' },
  { icon: '🚀', name: 'Deploy', desc: 'CI/CD & cloud deployment' },
];
const projects = [
  { emoji: '⚡', name: 'ZerMail', desc: 'Aplikasi email sementara dengan ekstraksi OTP otomatis, multi-inbox, dan mode gelap.', url: 'https://mail.adeerazer.web.id', tags: ['TypeScript','Tailwind','Upstash'] },
  { emoji: '☕', name: 'BeeCoffee', desc: 'Website kedai kopi dengan desain modern yang sepenuhnya responsif.', url: 'https://beecoffee.web.id', tags: ['HTML','CSS','JavaScript'] },
];

setTimeout(() => {
  document.getElementById('skillGrid').innerHTML = skills.map((s,i) =>
    `<div class="reveal card p-6 text-center" style="transition-delay:${i*60}ms">
      <p class="text-4xl mb-3">${s.icon}</p>
      <p class="font-bold">${s.name}</p>
      <p class="text-xs text-muted mt-1">${s.desc}</p>
    </div>`).join('');

  document.getElementById('projectGrid').innerHTML = projects.map((p,i) =>
    `<a href="${p.url}" target="_blank" class="reveal card p-8 block group" style="transition-delay:${i*100}ms">
      <p class="text-5xl mb-5">${p.emoji}</p>
      <h3 class="font-extrabold text-2xl mb-3 group-hover:text-goldlight transition">${p.name}</h3>
      <p class="text-muted text-sm leading-relaxed mb-5">${p.desc}</p>
      <div class="flex flex-wrap gap-2 mb-5">${p.tags.map(t =>
        `<span class="text-[11px] font-bold bg-ink border border-line px-3 py-1 rounded-full text-muted">${t}</span>`).join('')}</div>
      <span class="text-gold font-bold text-sm">Kunjungi →</span>
    </a>`).join('');

  document.querySelectorAll('#skillGrid .reveal, #projectGrid .reveal').forEach(el => io.observe(el));
}, 900);