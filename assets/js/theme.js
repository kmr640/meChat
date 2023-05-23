const darkTheme = document.querySelector('.theme');
darkTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const images = document.querySelectorAll('img');
    if (document.body.classList.contains('dark-theme')) {
        images.forEach((img) => {
            img.setAttribute('src', 'img/mechat-dash-dark.png');
        });
    } else {
        images.forEach((img) => {
            img.setAttribute('src', 'img/mechat-dash.png');
        });
    }
});