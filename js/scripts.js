
var nav = document.querySelector('nav');
var hamburgerBtn = document.querySelector('.navbar-toggler');
var headerGradientOverlay = document.querySelector('.gradientOverlay');

hamburgerBtn.addEventListener('click', function () {
    if (headerGradientOverlay.classList.contains('headergradient')) {
        headerGradientOverlay.classList.add('headerGradientMenuOpen')
        headerGradientOverlay.classList.remove('headergradient')
        console.log("it works!")
    } else {
        headerGradientOverlay.classList.remove('headerGradientMenuOpen')
        headerGradientOverlay.classList.add('headergradient')
        console.log("Second click works!")
    }
});


