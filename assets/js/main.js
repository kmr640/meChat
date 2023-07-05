const menuBar = document.querySelector('.menu-bar');
const closeBar = document.querySelector('.close-bar');
const navbarLinks = document.querySelector('.nav__link');

menuBar.addEventListener('click', () => {
    navbarLinks.classList.add('active');
});

closeBar.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 787) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  });

  // TODO: V3
  /* password filter show with eye
  adjust input border
  check for @ in strpos add border color
  make new carousel theme slide images 
  make chat.html*/


