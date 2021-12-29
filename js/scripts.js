
AOS.init();

var nav = document.querySelector('nav');
var hamburgerBtn = document.querySelector('.navbar-toggler');
var headerGradientOverlay = document.querySelector('#gradientOverlay');

hamburgerBtn.addEventListener('click', function () {
    if (window.pageYOffset < 470 && headerGradientOverlay.classList.contains('headergradient')) {
        headerGradientOverlay.classList.remove('headergradient')
        console.log("it works!")
    } else {
        headerGradientOverlay.classList.add('headergradient')
        console.log("Second click works!")
    }
});


