
AOS.init();

// HTML language attribute toggle
$('[lang="en"]').hide();

$('#switch-lang').click(function () {
    $('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
    console.log("working")

});

// Lang attribute for mobile
$('#switch-lang-mobile').click(function () {
    $('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
    console.log("working")

    if ($(this).attr('[lang="es"]')){
        localStorage.setItem("span", JSON.stringify('[lang="es"]'))
        localStorage.remove('[lang="en"]')
    } else if ($(this).attr('[lang="en"]')){
        localStorage.setItem("eng", JSON.stringify('[lang="en"]'))
        localStorage.remove('[lang="es"]')
    }
});

// Toggle mobile gradient so that it doesnt clash with the transparency of the menu when its open
$('.navbar-toggler').click(function(){
    console.log("click")
    if (window.pageYOffset < 470) {
        $('#gradientOverlay-mobile').toggleClass('headergradient')
    } 
})


// Add class to Desktop navbar
  $(document).scroll(function () {
    if (window.pageYOffset > 470) {
        $('nav').addClass('desktop-navbar-color')
    } else if (window.pageYOffset < 470) {
        $('nav').removeClass('desktop-navbar-color')
    }
});


// Index timer 
var x = setInterval(function() {
    if (!$('#body-home').length) return;
    var countDate = new Date("April 23, 2022 12:00:00").getTime();
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
    
}, 1000);
// Event is at 12pm Central, so the "hour", "min", & "sec" values will read as "0" at 12pm every day, and one "day" will be subtracted


