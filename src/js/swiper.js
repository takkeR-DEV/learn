import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([ Navigation, Pagination ]);

let sliders;
const swiperContainer = document.querySelector(".swiper");
function createSlider() {
  if (window.innerWidth < 768) {
    if (!swiperContainer.classList.contains("swiper-initialized")) {
      sliders = new Swiper(".swiper", {
        centeredSlides: false,   
        centeredSlidesBounds: true,
        watchOverflow: true,
        direction: 'horizontal',
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          480: {
            slidesPerView: 1.8,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 40
          }
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 12,
          clickable: true,
        },
      
      }) ;
    }
  } else {
    if (swiperContainer.classList.contains("swiper-initialized") && !sliders[0].destroyed) {
      for (let slider of sliders) {
        slider.destroy();
      }
    }
  }
}
createSlider();

window.addEventListener("resize", () => {
  createSlider();
});
