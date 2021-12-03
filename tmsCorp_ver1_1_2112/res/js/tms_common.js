// navbar scroll
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

// navbar toggle button for small screen
const navbarMenu = document.querySelector('.navbar_menu');
const navbarToggleBtn = document.querySelector('.navbar_toggle');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// footer
const footerMenu = document.querySelector('.ft_shortcut_dropdown');
const footerToggleBtn = document.querySelector('.ft_shortcut');
footerToggleBtn.addEventListener('click', () => {
  footerMenu.classList.toggle('open');
});

// handle click on the 'arrow up' button
// const arrowUp = document.querySelector('.btn_arrow-up');
// arrowUp.addEventListener('click', () => {
//   document.body.scrollIntoView({ behavior: 'smooth' });
// });

function yet() {
  alert('준비중입니다.');
}

// media slider
var slides = document.querySelector('.wrap_media'),
    slide = document.querySelectorAll('.wrap_media a'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.media_btn-prev'),
    nextBtn = document.querySelector('.media_btn-next'),
    slideWidth = 238,
    slideMargin = 24;

makeClone();

function makeClone() {  
  for(var i = 0; i < slideCount; i++) {
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }
  for(var i = slideCount - 1; i>=0; i--) {
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();

  setTimeout(function(){
    slides.classList.add('animated');
  }, 100);
}

setInterval(function() {
  const currentSlides = document.querySelectorAll('.wrap_media a');
  const newSlideCount = currentSlides.length;

  if(currentIdx < newSlideCount - 1) {
    moveSlide(currentIdx + 1);
  }
}, 2000)

function updateWidth() {
  const currentSlides = document.querySelectorAll('.wrap_media a');
  const newSlideCount = currentSlides.length;

  const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}

function setInitialPos() {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
}

nextBtn.addEventListener('click',function(){
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click', function(){
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin)+'px';
  currentIdx = num;

  if (currentIdx === slideCount){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(function(){
      slides.classList.add('animated');
    }, 600);
  }
  else if (currentIdx === -1){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = -(slideCount - 1) * (slideWidth + slideMargin) + 'px';
      currentIdx = slideCount-1;
    }, 500);
    setTimeout(function(){
      slides.classList.add('animated');
    }, 600);
  }
}

// partnership slider
var partnerSlides = document.querySelector('.wrap_logos'),
    partnerSlide = document.querySelectorAll('.wrap_logos img'),
    partnerCurrentIdx = 0,
    partnerSlideCount = partnerSlide.length,
    partnerSlideWidth = 140,
    partnerSlideMargin = 80;

partnerMakeClone();

function partnerMakeClone() {  
  for(var i = 0; i < partnerSlideCount; i++) {
    var partnerCloneSlide = partnerSlide[i].cloneNode(true);
    partnerCloneSlide.classList.add('clone');
    partnerSlides.appendChild(partnerCloneSlide);
  }
  for(var i = partnerSlideCount - 1; i>=0; i--) {
    var partnerCloneSlide = partnerSlide[i].cloneNode(true);
    partnerCloneSlide.classList.add('clone');
    partnerSlides.prepend(partnerCloneSlide);
  }

  partnerUpdateWidth();
  partnerSetInitialPos();

  setTimeout(function(){
    partnerSlides.classList.add('animated');
  }, 100);
}

setInterval(function() {
  const partnerCurrentSlides = document.querySelectorAll('.wrap_logos img');
  const partnerNewSlideCount = partnerCurrentSlides.length;

  if(partnerCurrentIdx < partnerNewSlideCount - 1) {
    partnerMoveSlide(partnerCurrentIdx + 1);
  }
}, 2000)

function partnerUpdateWidth() {
  const partnerCurrentSlides = document.querySelectorAll('.wrap_logos img');
  const partnerNewSlideCount = partnerCurrentSlides.length;

  const partnerNewWidth = (partnerSlideWidth + partnerSlideMargin) * partnerNewSlideCount - partnerSlideMargin + 'px';
  partnerSlides.style.width = partnerNewWidth;
}

function partnerSetInitialPos() {
  const initialTranslateValue = -(partnerSlideWidth + partnerSlideMargin) * partnerSlideCount;
  partnerSlides.style.transform = `translateX(${initialTranslateValue}px)`;
}

function partnerMoveSlide(num) {
  partnerSlides.style.left = -num * (partnerSlideWidth + partnerSlideMargin)+'px';
  partnerCurrentIdx = num;

  if (partnerCurrentIdx === partnerSlideCount){
    setTimeout(function(){
      partnerSlides.classList.remove('animated');
      partnerSlides.style.left = '0px';
      partnerCurrentIdx = 0;
    }, 500);
    setTimeout(function(){
      partnerSlides.classList.add('animated');
    }, 600);
  }
}

// news slider
let newsPrevBtn = document.querySelector('.news_btn-prev');
let newsNextBtn = document.querySelector('.news_btn-next');
let newsDatas = document.querySelectorAll('.wrap_news');
let newsDatasCount = (newsDatas.length -1);
let newsCurrentIdx = 0;

newsNextBtn.addEventListener('click',function(){
  newsCurrentIdx += 1;
  nextSlide ();
  if(newsCurrentIdx === newsDatasCount) {
    newsNextBtn.disabled = true;
    newsNextBtn.classList.add('disabled');
  }
  if(newsCurrentIdx > 0) {
    newsPrevBtn.disabled = false;
    newsPrevBtn.classList.remove('disabled');
  }
});
newsPrevBtn.addEventListener('click', function(){
  newsCurrentIdx -= 1;
  prevSlide ();
  if(newsCurrentIdx === 0) {
    newsPrevBtn.disabled = true;
    newsPrevBtn.classList.add('disabled');
  }
  if(newsCurrentIdx < newsDatasCount) {
    newsNextBtn.disabled = false;
    newsNextBtn.classList.remove('disabled');
  }
});

const showingClass = 'showing';
const newsFirstSlide = document.querySelector('.wrap_news:first-child');
function nextSlide () {
  const newsCurrentSlide = document.querySelector(`.${showingClass}`);
  if(newsCurrentSlide) {
    newsCurrentSlide.classList.remove(showingClass);
    const nextSlide = newsCurrentSlide.nextElementSibling;
    if(nextSlide) {
      nextSlide.classList.add(showingClass);
    }
  }
}
function prevSlide () {
  const newsCurrentSlide = document.querySelector(`.${showingClass}`);
  if(newsCurrentSlide) {
    newsCurrentSlide.classList.remove(showingClass);
    const prevSlide = newsCurrentSlide.previousElementSibling;
    if(prevSlide) {
      prevSlide.classList.add(showingClass);
    }
  }
}