// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dark mode toggle with persistence
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') root.classList.add('light');

function setButtonLabel() {
  themeToggle.textContent = root.classList.contains('light') ? 'Dark' : 'Light';
}
setButtonLabel();

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  setButtonLabel();
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .project-card, .section h2').forEach((el) => {
  el.style.transform = 'translateY(12px)';
  el.style.opacity = '0';
  el.style.transition = 'opacity 400ms ease, transform 400ms ease';
  observer.observe(el);
});
