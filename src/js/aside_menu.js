// .aside__hidden класс с изменением расположения по оси Х на 340px добавить к .aside
// .wrapper__blur добавить к классу .wrapper 
// .aside__open класс для кнопки на которой будет клик


const asideButton = document.querySelector('.aside__button-open');
const wrapper = document.querySelector('.wrapper');
const blur = document.querySelector('.blur');
const aside = document.querySelector('.aside');
const asideClose = document.querySelector('.aside__close');

asideButton.addEventListener('click', function () {
  aside.classList.add('aside__open');
  aside.classList.remove('aside__hidden'); 
  blur.classList.add('blur-block');
})

asideClose.addEventListener('click', function () {
  aside.classList.add('aside__hidden');
  aside.classList.remove('aside__open');
  blur.classList.remove('blur-block');
})

blur.addEventListener('click', function() {
  if (aside.classList.contains('aside__open')) {
    // console.log('клик123');
    blur.classList.remove('blur-block');
    aside.classList.add('aside__hidden');
    aside.classList.remove('aside__open');
    callback.classList.remove('callBack__open')
    feedback.classList.remove('feedBack__open')
} else {
  // console.log('Нэт123');
  feedback.classList.remove('feedBack__open')
  aside.classList.remove('aside__open');
  callback.classList.remove('callBack__open')
  blur.classList.remove('blur-block');
}
});
// открытие/закрытие callback

const asideCallbackBtn = document.querySelectorAll('.aside__button-phone-open');
const callback = document.querySelector('.callBack');
const callbackClose = document.querySelectorAll('.callBack__close')
// const callbackClose2 = document.querySelector('.callBack__close2')

for(item of asideCallbackBtn) {
  item.addEventListener('click', function() {
  callback.classList.add('callBack__open')
  callback.classList.remove('callBack__hidden')
  // aside.classList.add('aside__hidden');
  aside.classList.remove('aside__open');
  blur.classList.add('blur-block');
  document.getElementById("callBack__phone").focus({preventScroll:true}); 
});
}

for(item of callbackClose) {
  item.addEventListener('click', function () {
  blur.classList.remove('blur-block');
  callback.classList.remove('callBack__open')
});
}



// открытие/закрытие feedback

const asideFeedBackBtn = document.querySelectorAll('.aside__button-msg-open');
const feedback = document.querySelector('.feedBack');
const feedbackClose = document.querySelectorAll('.feedBack__close')

for(item of asideFeedBackBtn) {
  item.addEventListener('click', function() {
  feedback.classList.add('feedBack__open')
  // aside.classList.add('aside__hidden');
  aside.classList.remove('aside__open');
  blur.classList.add('blur-block');
  document.getElementById("login-namt").focus({preventScroll:true});  
  });  
}

for(item of feedbackClose){
  item.addEventListener('click', function () {
    // console.log('я тут');
    blur.classList.remove('blur-block');
    feedback.classList.remove('feedBack__open')
  });
}

