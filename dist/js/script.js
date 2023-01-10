window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


const hamburger = document.querySelector('#hamburger');
const navManu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navManu.classList.toggle('hidden');
});