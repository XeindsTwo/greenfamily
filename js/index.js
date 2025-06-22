new Swiper('.gallery__swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 15,
  navigation: {
    prevEl: '.gallery__btn--prev',
    nextEl: '.gallery__btn--next',
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

const modal = document.getElementById('reviewModal');
const openBtn = document.getElementById('cases_btn');
const closeBtn = document.getElementById('closeModal');

function openModal() {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  document.documentElement.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  document.documentElement.classList.remove('modal-open');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);