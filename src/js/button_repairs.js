//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

const button = document.querySelector('.repairs__button-read-more');
const page = document.querySelector('.repairs__main');
let text = document.querySelector('.repairs__button-read-more>p');

button.addEventListener('click', function () {
	
  	page.classList.toggle('repairs__main_open'); 
  	button.classList.toggle('repairs__button-read-more_rotated'); 
  	if (page.classList.contains('repairs__main_open')) {
  		text.textContent = 'Скрыть';
  	} else {
  		text.textContent = 'Показать все';
  		// page.classList.add('trademarks__main_hidden');
  	}
}
);





