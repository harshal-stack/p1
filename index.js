

function works() {
    document.querySelector(".navbar").classList.toggle("activate")
    document.querySelector(".mobile-nav").classList.toggle("mobile-nav-close")
}

let img = document.querySelector(".img");
let fimg = document.querySelector(".full-img");


function fullimage(pic) {

    fimg.src = pic;
    fimg.style.display = "block"

}




let button = document.querySelector(".arrow")

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"
    }
    else {
        button.style.display = "none"
    }
}

function totop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });