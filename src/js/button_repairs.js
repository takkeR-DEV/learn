//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

const button = document.querySelector('.repairs__button-read-more');
const page = document.querySelector('.repairs__main');
let text = document.querySelector('.repairs__button-read-more>span');

button.addEventListener('click', function () {
	
  	page.classList.toggle('repairs__main_open'); 
  	// button.classList.toggle('repairs__button-read-more_rotated'); 
  	if (page.classList.contains('repairs__main_open')) {
  		text.textContent = 'Скрыть';
			button.classList.add('repairs__button-read-more-tst')
  	} else {
  		text.textContent = 'Показать все';
			button.classList.remove('repairs__button-read-more-tst')
  		// page.classList.add('trademarks__main_hidden');
  	}
}
);





