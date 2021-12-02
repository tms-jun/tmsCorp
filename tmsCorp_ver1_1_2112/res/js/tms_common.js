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

function updateWidth(){
  const currentSlides = document.querySelectorAll('.wrap_media a');
  const newSlideCount = currentSlides.length;

  const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}

function setInitialPos(){
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
var partnerLogos = document.querySelector('.wrap_logos'),
    partnerLogo = document.querySelectorAll('.wrap_logos img'),
    partnerCurrentIdx = 0,
    partnerSlideCount = partnerLogo.length,
    partnerSlideWidth = 140,
    partnerSlideMargin = 80;

partnerMakeClone();

function partnerMakeClone() {
  for(var i = 0; i < partnerSlideCount; i++) {
    var partnerCloneSlide = partnerLogo[i].cloneNode(true);
    partnerCloneSlide.classList.add('clone');
    partnerLogos.appendChild(partnerCloneSlide);
  }
  for(var i = partnerSlideCount - 1; i>=0; i--) {
    var partnerCloneSlide = partnerLogo[i].cloneNode(true);
    partnerCloneSlide.classList.add('clone');
    partnerLogos.prepend(partnerCloneSlide);
  }
  
  partnerUpdateWidth();
  partnerSetInitialPos();
  
  setTimeout(function(){
    partnerLogos.classList.add('animated');
  }, 100);
}

setInterval(function() {
  const partnerCurrentSlides = document.querySelectorAll('.wrap_logos img');
  const partnerNewSlideCount = partnerCurrentSlides.length;

  if(partnerCurrentIdx < partnerNewSlideCount - 1) {
    partnerMoveSlide(partnerCurrentIdx + 1);
  }
}, 980)

function partnerUpdateWidth(){
  const partnerCurrentSlides = document.querySelectorAll('.wrap_logos img');
  const partnerNewSlideCount = partnerCurrentSlides.length;

  const partnerNewWidth = (partnerSlideWidth + partnerSlideMargin) * partnerNewSlideCount - partnerSlideMargin + 'px';
  partnerLogos.style.width = partnerNewWidth;
}
function partnerSetInitialPos(){
  const initialTranslateValue = -(partnerSlideWidth + partnerSlideMargin) * partnerSlideCount;
  partnerLogos.style.transform = `translateX(${initialTranslateValue}px)`;
}

function partnerMoveSlide(num) {
  partnerLogos.style.left = -num * (partnerSlideWidth + partnerSlideMargin)+'px';
  partnerCurrentIdx = num;

  if (partnerCurrentIdx === partnerSlideCount + 1){
    setTimeout(function(){
      partnerLogos.classList.remove('animated');
      partnerLogos.style.left = '0px';
      partnerCurrentIdx = 0;
    }, 300);
    setTimeout(function(){
      partnerLogos.classList.add('animated');
    }, 310);
  }
  else if (partnerCurrentIdx === -1){
    setTimeout(function(){
      partnerLogos.classList.remove('animated');
      partnerLogos.style.left = -(partnerSlideCount - 1) * (partnerSlideWidth + partnerSlideMargin) + 'px';
      partnerCurrentIdx = partnerSlideCount-1;
    }, 300);
    setTimeout(function(){
      partnerLogos.classList.add('animated');
    }, 310);
  }
}

// news slider
