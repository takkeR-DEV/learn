//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

const button = document.querySelector('.trademarks__button-read-more');
const page = document.querySelector('.trademarks__main');
let text = document.querySelector('.trademarks__button-read-more>span');

button.addEventListener('click', function () {
	
  	page.classList.toggle('trademarks__main_open'); 
  	button.classList.toggle('trademarks__button-read-more_rotated'); 
  	if (page.classList.contains('trademarks__main_open')) {
  		text.textContent = 'Скрыть';
			button.classList.add('trademarks__button-read-more-tst')
  	} else {
  		text.textContent = 'Показать все';
			button.classList.remove('trademarks__button-read-more-tst')
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




