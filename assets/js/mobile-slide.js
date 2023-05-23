window.addEventListener('resize', () => {
    const slideInElements = document.querySelectorAll('.mobile-slide-left, .mobile-slide-right');
    slideInElements.forEach((element) => {
      if (window.innerWidth <= 787 || window.onload) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  });