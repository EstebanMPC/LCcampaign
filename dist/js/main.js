var nav=document.querySelector("nav"),hamburgerBtn=document.querySelector(".navbar-toggler"),headerGradientOverlay=document.querySelector(".gradientOverlay");hamburgerBtn.addEventListener("click",function(){headerGradientOverlay.classList.contains("headergradient")?(headerGradientOverlay.classList.add("headerGradientMenuOpen"),headerGradientOverlay.classList.remove("headergradient"),console.log("it works!")):(headerGradientOverlay.classList.remove("headerGradientMenuOpen"),headerGradientOverlay.classList.add("headergradient"),console.log("Second click works!"))});