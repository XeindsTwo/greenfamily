const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const html = document.documentElement;
const body = document.body;

menuBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  const isActive = this.classList.contains('active');

  if (isActive) {
    html.style.overflowX = 'hidden';
    body.style.overflowX = 'hidden';
    body.style.overflowY = 'hidden';
    html.style.overflowY = 'hidden';
  } else {
    html.style.overflowX = '';
    html.style.overflowY = '';
    body.style.overflowX = '';
    body.style.overflowY = '';
  }
});