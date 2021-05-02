var preloader = document.querySelector('.loader');
var body = document.querySelector('body');

body.addEventListener('load', () => {
    preloader.style.display = 'none';
})