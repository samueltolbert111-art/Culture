const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const modeToggle = document.querySelector('.mode-toggle');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const slides = [...document.querySelectorAll('.slides img')];
let currentIndex = 0;
const showSlide = (index) => {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
};

document.querySelector('.next')?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.prev')?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4500);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

modeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
