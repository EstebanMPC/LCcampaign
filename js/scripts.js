
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
});

// Toggle mobile gradient so that it doesnt clash with the transparency of the menu when its open
$('.navbar-toggler').click(function(){
    console.log("click")
    if (window.pageYOffset < 470) {
        $('#gradientOverlay-mobile').toggleClass('headergradient')
    } 
})

// Toggle background color of navbar after scrolling past landing page
// $('document').ready(function() {
//     if (window.pageYOffset > 470){
//     console.log("test")
//     } 
// })


 

    // $('nav').css(backgroundImage = "linear-gradient(266deg, rgba(2, 0, 36, 0.2553396358543417) 0%, rgba(255, 205, 5, 0.7) 0%, rgba(2, 81, 151, 0.7) 97%);")


// document.addEventListener('scroll', function () {
//     navBar = document.getElementById('navigation-bar');

//     if (window.pageYOffset > 800) {
//         navBar.style.backgroundImage = "linear-gradient(266deg, rgba(2, 0, 36, 0.2553396358543417) 0%, rgba(255, 205, 5, 0.7) 0%, rgba(2, 81, 151, 0.7) 97%);"
//         console.log("itwo")
//     } 
// });

