// .aside__hidden класс с изменением расположения по оси Х на 340px добавить к .aside
// .wrapper__blur добавить к классу .wrapper 
// .aside__open класс для кнопки на которой будет клик


const asideButton = document.querySelector('.aside__button-open');
const wrapper = document.querySelector('.wrapper');
const blur = document.querySelector('.blur');
const aside = document.querySelector('.aside');
const asideClose = document.querySelector('.aside__close');

asideButton.addEventListener('click', function () {
  // aside.classList.add('aside__open');
  aside.style.left = "0px"
  blur.style.display = "block";
  // aside.classList.remove('aside__hidden'); 
})

asideClose.addEventListener('click', function () {
  // aside.classList.remove('aside__hidden');
  blur.style.display = "none";
  aside.style.left = "-340px"
})

blur.addEventListener('click', function() {
  if (aside.style.left == "0px") {
    // console.log('клик123');
    blur.style.display = "none";
    aside.style.left = ""
    callback.style.right = ""
    feedback.style.right = ""
} else {
  // console.log('Нэт123');
  feedback.style.right = ""
  callback.style.right = ""
  blur.style.display = "none";
}
});
// открытие/закрытие callback

const asideCallbackBtn = document.querySelectorAll('.aside__button-phone-open');
const callback = document.querySelector('.callBack');
const callbackClose = document.querySelector('.callBack__nav .callBack__close')
const callbackCloseFull = document.querySelector('.callBack__nav-full .callBack__close')
// const callbackClose2 = document.querySelector('.callBack__close2')

for(item of asideCallbackBtn) {
  item.addEventListener('click', function() {
  callback.style.right = "0px"
  aside.style.left = ""
  blur.style.display = "block";  
});}


callbackClose.addEventListener('click', function () {
  blur.style.display = "none";
  callback.style.right = ""
});

callbackCloseFull.addEventListener('click', function () {
  blur.style.display = "none";
  callback.style.right = ""
});


// открытие/закрытие feedback

const asideFeedBackBtn = document.querySelectorAll('.aside__button-msg-open');
const feedback = document.querySelector('.feedBack');
const feedbackClose = document.querySelector('.feedBack__nav .feedBack__close')
const feedbackCloseFull = document.querySelector('.feedBack__nav-full .feedBack__close')
// const callbackClose2 = document.querySelector('.callBack__close2')

for(item of asideFeedBackBtn) {
  item.addEventListener('click', function() {
  feedback.style.right = "0px"
  aside.style.left = ""
  blur.style.display = "block";  
  });  
}
feedbackClose.addEventListener('click', function () {
  // console.log('я тут');
  blur.style.display = "none";
  feedback.style.right = ""
});

feedbackCloseFull.addEventListener('click', function () {
  // console.log('я тут');
  blur.style.display = "none";
  feedback.style.right = ""
});

