//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

const button = document.querySelector('.main__button-read-more');
const page = document.querySelector('.main__text-container');
let text = document.querySelector('.main__button-read-more>span');

button.addEventListener('click', function () {
	
  	page.classList.toggle('main__main_open'); 
  	// button.classList.toggle('main__button-read-more_rotated'); 
  	if (page.classList.contains('main__main_open')) {
  		text.textContent = 'Скрыть';
			button.classList.add('main__button-read-more-tst')
  	} else {
  		text.textContent = 'Читать далее';
			button.classList.remove('main__button-read-more-tst')
  		// page.classList.add('trademarks__main_hidden');
  	}
}
);

//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

// const button = document.querySelector('.trademarks__button-read-more');
// const page = document.querySelector('.trademarks__main');
// let text = document.querySelector('.trademarks__button-read-more>p');
// console.log(text);
// console.log(text == '');

// button.addEventListener('click', function () {
	
//   	page.classList.toggle('trademarks__main_open'); 
//   	button.classList.toggle('trademarks__button-read-more_rotated'); 
//   	if (text.innerHTML == 'Показать все') {
//   		text.innerHTML = 'Скрыть';
//   			page.classList.remove('trademarks__main_hidden');
//   	} else {
//   		text.innerHTML = 'Показать все';
//   		page.classList.add('trademarks__main_hidden');
//   	}
// }
// );




