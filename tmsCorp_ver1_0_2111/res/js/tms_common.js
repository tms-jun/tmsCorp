// navbar
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
var slides = document.querySelector('.media_inner'),
    slide = document.querySelectorAll('.media_inner a'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.media_arrow-left'),
    nextBtn = document.querySelector('.media_arrow-right'),
    slideWidth = 238,
    slideMargin = 24;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
  slides.style.left = -num * 262 + 'px';
  currentIdx = num;
}
function moveSlideLast(num) {
  slides.style.left = -num * 262 + 176 + 'px';
  currentIdx = num;
}
nextBtn.addEventListener('click', () => {
  if(currentIdx < slideCount - 5) {
    moveSlide(currentIdx + 1);
  } else if(currentIdx < slideCount - 4) {
    moveSlideLast(currentIdx + 1);
  } else {
    moveSlide(0);
  }
});
prevBtn.addEventListener('click', () => {
  if(currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlideLast(slideCount - 4);
  }
});


// partnership slider
var partnerLogos = document.querySelector('.partnership_logos'),
    partnerLogo = document.querySelectorAll('.partnership_logos img'),
    partnerCurrentIdx = 0,
    partnerSlideCount = partnerLogo.length,
    partnerSlideWidth = 140,
    partnerSlideMargin = 80;

    
partnerLogos.style.width = (partnerSlideWidth + partnerSlideMargin) * partnerSlideCount - partnerSlideMargin + 'px';

function partmerMoveSlide(num) {
  partnerLogos.style.left = -num * 220 + 'px';
  partnerCurrentIdx = num;
}

makeClone();

function makeClone() {
  setInterval(function() {
    if(partnerCurrentIdx < partnerSlideCount - 1) {
      partmerMoveSlide(partnerCurrentIdx + 1);
    }
  }, 1800)
  
  for(var i = 0; i < partnerSlideCount; i++) {
    var cloneSlide = partnerLogo[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    partnerLogos.appendChild(cloneSlide);
  }
  for(var i = partnerSlideCount - 1; i>=0; i--) {
    var cloneSlide = partnerLogo[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    partnerLogos.prepend(cloneSlide);
  }
}