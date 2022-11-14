let switcher = document.querySelector('.trademarks__wrapper:nth-child(2)');
let switcherTwo = document.querySelector('.trademarks__main');
let switcherThree = document.querySelectorAll('.trademarks__logo');
let isSviperInit = false;

function swiperInit() {
const swiper = new Swiper('.swiper',{
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

let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

function changeClasses () {
  // console.log("значение1 -" + mobile.matches)	
 	if (mobile.matches == true) {
 		// console.log("ширина экрана " + window.screen.width);
 		// console.log('Ширина экрана меньше или равна 767px');
 		switcher.classList.add('swiper'); 
 		switcherTwo.classList.add('swiper-wrapper');
 		for (var i=0; i<switcherThree.length; i++) {
      console.log("длина " + i)
 			switcherThree[i].classList.add('swiper-slide');
 		}
 
 		if (isSviperInit == false) {
 			swiper = swiperInit('');	
 			isSviperInit = true;
 		}
 		
 	} else {
 		switcher.classList.remove('swiper');
 		switcherTwo.classList.remove('swiper-wrapper');
 		for (var i=0; i<switcherThree.length; i++) {
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