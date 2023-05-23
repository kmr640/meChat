const menuBar = document.querySelector('.menu-bar');
const closeBar = document.querySelector('.close-bar');
const navbarLinks = document.querySelector('.nav-link');

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
