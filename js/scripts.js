
AOS.init();


// Jquery Desktop 

$('[lang="en"]').hide();

$('#switch-lang').click(function () {
    $('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
    console.log("working")
});

$('#switch-lang-mobile').click(function () {
    $('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
    console.log("working")
});



// var nav = document.querySelector('nav');
// var hamburgerBtn = document.getElementById('navbar-toggler');
// var headerGradientOverlay = document.getElementById('gradientOverlay');



// $('.navbar-toggler').click(function(){
//     console.log("click")
//     if (window.pageYOffset < 470 && $('#gradientOverlay').classList.contains('headergradient')) {
//         $('#gradientOverlay').removeClass('headergradient')
//         console.log("itworks")
//     } else {
//        $('#gradientOverlay').addClass('headergradient')
//     }
// })


// hamburgerBtn.addEventListener('click', function () {
//     console.log("click")
    
// });

// if (window.pageYOffset > 470 && headerGradientOverlay.classList.contains('headergradient')) {
//         headerGradientOverlay.classList.remove('headergradient')
//         console.log("itworks")
//     } else {
//         headerGradientOverlay.classList.add('headergradient')
//     }

// document.addEventListener('scroll', function () {
//     navBar = document.getElementById('navigation-bar');

//     if (window.pageYOffset > 800) {
//         navBar.style.backgroundImage = "linear-gradient(266deg, rgba(2, 0, 36, 0.2553396358543417) 0%, rgba(255, 205, 5, 0.7) 0%, rgba(2, 81, 151, 0.7) 97%);"
//         console.log("itwo")
//     } 
// });

