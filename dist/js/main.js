AOS.init(),$(window).on("resize orientationchange",function(){window.innerWidth>window.innerHeight?($("#desktopLanding").addClass("d-block"),$("#desktopLanding").removeClass("d-none"),$("#mobileLanding").addClass("d-none")):window.innerHeight>window.innerWidth&&($("#desktopLanding").removeClass("d-block"),$("#desktopLanding").addClass("d-none"),$("#mobileLanding").removeClass("d-none"))}),$(document).ready(function(){const e=localStorage.getItem("current-language");$("#homeOption").hide(),"eng"==e?$('[lang="es"]').hide():$('[lang="en"]').hide()}),$("#switch-lang").click(function(){$('[lang="es"]').toggle(),$('[lang="en"]').toggle(),$('[lang="en"]').is(":visible")?localStorage.setItem("current-language","eng"):$('[lang="es"]').is(":visible")&&localStorage.setItem("current-language","span")}),$("#switch-lang-mobile").click(function(){$('[lang="es"]').toggle(),$('[lang="en"]').toggle(),$('[lang="en"]').is(":visible")?localStorage.setItem("current-language","eng"):$('[lang="es"]').is(":visible")&&localStorage.setItem("current-language","span")}),$(".navbar-toggler").click(function(){console.log("click"),window.pageYOffset<470&&$("#gradientOverlay-mobile").toggleClass("headergradient")}),$(document).scroll(function(){window.pageYOffset>470?($("nav").addClass("desktop-navbar-color"),$("#homeOption").show()):window.pageYOffset<470&&($("nav").removeClass("desktop-navbar-color"),$("#homeOption").hide())});var x=setInterval(function(){if("/"==window.location.pathname||"/index.html"==window.location.pathname){if(!$("#body-home").length)return;var e=new Date("April 23, 2022 12:00:00").getTime(),n=(new Date).getTime(),o=e-n;const t=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),i=Math.floor(o%36e5/6e4),l=Math.floor(o%6e4/1e3);document.querySelector(".day").innerText=t,document.querySelector(".hour").innerText=a,document.querySelector(".minute").innerText=i,document.querySelector(".second").innerText=l}},1e3);