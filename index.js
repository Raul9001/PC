const overlayMenu=document.querySelector(".overlay-menu")
const navbarButton=document.querySelector(".navbar-toggler-icon")
const closemenu=document.querySelector(".fa-x")


navbarButton.addEventListener("click",openthemenu)
closemenu.addEventListener("click", closethemenu)  




function openthemenu(){
  overlayMenu.classList.add("aktiv")
  
}

function closethemenu(){
 overlayMenu.classList.remove("aktiv")

}


// swiper js code
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});


const swiper2 = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});