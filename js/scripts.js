
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


var x = setInterval(function() {
    var countDate = new Date("April 23, 2022 15:37:25").getTime();
    var now = new Date().getTime();
    var gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) /  hour);
    const textMinute = Math.floor((gap % hour) /  minute);
    const textSecond= Math.floor((gap % minute) /  second);

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond

    console.log(now, countDate)
}, 1000);