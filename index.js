const overlayMenu=document.querySelector(".overlay-menu")
const navbarButton=document.querySelector(".navbar-toggler-icon")
const closemenu=document.querySelector(".fa-x")
const next=document.querySelector(".button-next")
const prev=document.querySelector(".button-prev")
 


navbarButton.addEventListener("click",openthemenu)
closemenu.addEventListener("click", closethemenu)  



function openthemenu(){
  overlayMenu.classList.add("aktiv")
  
}

function closethemenu(){
 overlayMenu.classList.remove("aktiv")

}

prev.addEventListener('click', function () {
  swiper3.slidePrev();
});

next.addEventListener('click', function () {
  swiper3.slideNext();
});



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
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }
});






const swiper3 = new Swiper(".mySwiper3", {


  slidesPerView: 3,
  spaceBetween: 30,




});

{/* <div class=" blog ">
<span id="metadata">April 16, 2021 .6 mins</span>
<h3>Design tips for designers, that cover <br>everything you need</h3>
<a href="" class="text-white">Read the article</a>
 </div> */}





//  function fetch() {
// return new Promise(resolve,reject)
//  }


function fetchBlogs(){
  return new Promise((resolve,reject)=>{
  fetch("blogs.json")
  .then(answer => {
if(!answer.ok){
  throw new Error("Проблема в прочтении файла")
}
return answer.json()


  })
then(bloqlar =>{
  localStorage.setItem("bloqlarDepo",JSON.stringify(bloqlar))
  resolve(bloqlar)
})
.catch(xeta => reject(xeta))
  
  })
}







function getDataFromLocalStorage(){
  const blogs = localStorage.getItem("bloglarDepo")
  return blogs ? JSON.parse(blogs) : null
}


function displayBlog(blogsParametr){
const blogPlaceDiv = document.querySelector(".blog-right-side") 


blogPlaceDiv.innerHTML = ` `


blogsParametr.forEach(birBlog => {


  const divElement= document.createElement("div")
divElement.classList.add("blog")
divElement.innerHTML = `
<span id="metadata">${birBlog.tarix}</span>
<h3>${birBlog.title}</h3>
<a href="" class="text-white">Read the article</a>`



blogPlaceDiv.appendChild(divElement)


})
}

document.addEventListener("DOMContentLoaded",loadData)


function loadData () {
  const blogs = getDataFromLocalStorage()

  if(blogs){
    console.log("Blog is loading...")
    displayBlog(blogs)
  }
  else{
    console.log("Blog is do not loading...")
    fetchBlogs()
          .then(lastStageBlogs => displayBlog(lastStageBlogs))
          .catch(err => console.log(`there is an unexpected problem in the server ${err.message}`))
    }
}