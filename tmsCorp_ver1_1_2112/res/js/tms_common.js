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
const arrowUp = document.querySelector('.btn_arrow-up');
arrowUp.addEventListener('click', () => {
  document.body.scrollIntoView({ behavior: 'smooth' });
});

function yet() {
  alert('준비중입니다.');
}

// our Story
// const tabs = document.querySelectorAll('[data-tab-target]');
// const tabContents = document.querySelectorAll('[data-tab-content]');
// const ourStoryNews = document.querySelector('.ourStory_news_container');
// const ourStoryMedia = document.querySelector('.ourStory_media_container');

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     console.log(target);
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('active');
//       tabContent.classList.add('hide');
//     });
//     tabs.forEach(tab => {
//       tab.classList.remove('active');
//     });
//     target.classList.add('active');
//     target.classList.remove('hide');
//     tab.classList.add('active');
//   });
// });