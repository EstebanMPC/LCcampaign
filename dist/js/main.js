AOS.init(),$('[lang="en"]').hide(),$("#switch-lang").click(function(){$('[lang="es"]').toggle(),$('[lang="en"]').toggle(),console.log("working")}),$("#switch-lang-mobile").click(function(){$('[lang="es"]').toggle(),$('[lang="en"]').toggle(),console.log("working"),$(this).attr('[lang="es"]')?(localStorage.setItem("span",JSON.stringify('[lang="es"]')),localStorage.remove('[lang="en"]')):$(this).attr('[lang="en"]')&&(localStorage.setItem("eng",JSON.stringify('[lang="en"]')),localStorage.remove('[lang="es"]'))}),$(".navbar-toggler").click(function(){console.log("click"),window.pageYOffset<470&&$("#gradientOverlay-mobile").toggleClass("headergradient")}),$(document).scroll(function(){window.pageYOffset>470?$("nav").addClass("desktop-navbar-color"):window.pageYOffset<470&&$("nav").removeClass("desktop-navbar-color")});var x=setInterval(function(){if($("#body-home").length){var e=new Date("April 23, 2022 12:00:00").getTime(),n=(new Date).getTime(),o=e-n;const t=Math.floor(o/864e5),l=Math.floor(o%864e5/36e5),a=Math.floor(o%36e5/6e4),g=Math.floor(o%6e4/1e3);document.querySelector(".day").innerText=t,document.querySelector(".hour").innerText=l,document.querySelector(".minute").innerText=a,document.querySelector(".second").innerText=g}},1e3);