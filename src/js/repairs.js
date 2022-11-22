
const switcher = document.querySelector('.repairs__wrapper:nth-child(2)');
const switcherTwo = document.querySelector('.repairs__main');
const switcherThree = document.querySelectorAll('.repairs__logo');
let isSviperInit = false;

function swiperInit() {
const swiper = new Swiper('.repairs__swiper',{
  centeredSlides: false,   
  centeredSlidesBounds: true,
  watchOverflow: true,
  direction: 'horizontal',
  slidesPerView: 1.1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2.7,
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
return swiper;
}

// ----------------

const mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

function changeClasses () {	
 	if (mobile.matches == true) {
 		switcher.classList.add('repairs__swiper'); 
 		switcherTwo.classList.add('swiper-wrapper');
 		for (let i=0; i<switcherThree.length; i++) {
 			switcherThree[i].classList.add('swiper-slide');
 		}
 
 		if (isSviperInit == false) {
 			swiper = swiperInit('');	
 			isSviperInit = true;
 		}
 		
 	} else {
 		switcher.classList.remove('repairs__swiper');
 		switcherTwo.classList.remove('swiper-wrapper');
 		for (let i=0; i<switcherThree.length; i++) {
 			switcherThree[i].classList.remove('swiper-slide');
 		}

 		if (isSviperInit == true) {
 			swiper.destroy();
 			isSviperInit = false;
 		}
 	}
}

changeClasses();

window.addEventListener('resize',function() {
	changeClasses();    
});