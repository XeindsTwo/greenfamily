Fancybox.bind("[data-fancybox]", {});

new Swiper('.gallery__swiper', {
  loop: true,
  spaceBetween: 15,
  navigation: {
    prevEl: '.gallery__btn--prev',
    nextEl: '.gallery__btn--next',
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
    }
  }
});

new Swiper('.swiper__reviews', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 600,
  autoHeight: true,
  navigation: {
    prevEl: '.cases__btn--prev',
    nextEl: '.cases__btn--next'
  },
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    document.documentElement.classList.add('modal-open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    document.documentElement.classList.remove('modal-open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const reviewOpenBtn = document.getElementById('cases_btn');
  const reviewCloseBtn = document.getElementById('closeModal');
  reviewOpenBtn?.addEventListener('click', () => openModal('reviewModal'));
  reviewCloseBtn?.addEventListener('click', () => closeModal('reviewModal'));

  const orderCloseBtn = document.getElementById('closeOrderModal');
  document.querySelectorAll('[data-btn-modal-order]').forEach(btn => {
    btn.addEventListener('click', () => openModal('orderModal'));
  });
  orderCloseBtn?.addEventListener('click', () => closeModal('orderModal'));

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.documentElement.classList.remove('modal-open');
      }
    });
  });

  document.getElementById('orderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отправлена!');
    closeModal('orderModal');
    e.target.reset();
  });

  document.getElementById('reviewForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Отзыв отправлен!');
    closeModal('reviewModal');
    e.target.reset();
  });
});

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  targetOffset = targetElement.offsetTop - 30;
  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});

function animateBanner() {
  const banner = document.querySelector('.banner');
  const title = document.querySelector('.banner__title');
  const text = document.querySelector('.banner__text');
  const btn = document.querySelector('.banner__btn');

  banner.classList.remove('animate');
  title.classList.remove('animate');
  text.classList.remove('animate');
  btn.classList.remove('animate');

  setTimeout(() => {
    banner.classList.add('animate');
    title.classList.add('animate');
    text.classList.add('animate');
    btn.classList.add('animate');
  }, 50);
}

animateBanner();

setInterval(animateBanner, 5000);