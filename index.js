const overlayMenu=document.querySelector(".overlay-menu")
const navbarButton=document.querySelector(".navbar-toggler-icon")
const closemenu=document.querySelector(".fa-x")
// const next=document.querySelector(".button-next")
// const prev=document.querySelector(".button-prev")
 


navbarButton.addEventListener("click",openthemenu)
closemenu.addEventListener("click", closethemenu)  



function openthemenu(){
  overlayMenu.classList.add("aktiv")
  
}

function closethemenu(){
 overlayMenu.classList.remove("aktiv")

}

// prev.addEventListener('click', function () {
//   swiper3.slidePrev();
// });

// next.addEventListener('click', function () {
//   swiper3.slideNext();
// });



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

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },


});

{/* <div class=" blog ">
<span id="metadata">April 16, 2021 .6 mins</span>
<h3>Design tips for designers, that cover <br>everything you need</h3>
<a href="" class="text-white">Read the article</a>
 </div> */}





//  function fetch() {
// return new Promise(resolve,reject)
//  }


function fetchBlogs() {
  return new Promise((resolve, reject) => {
    fetch("blogs.json")
      .then(answer => {
        if (!answer.ok) {
          throw new Error("Проблема в прочтении файла");
        }
        return answer.json();
      })
      .then(blogs => {
        localStorage.setItem("bloglarDepo", JSON.stringify(blogs)); // Сохраняем блоги в localStorage
        resolve(blogs);
      })
      .catch(error => reject(error));
  });
}

function getDataFromLocalStorage() {
  localStorage.removeItem("bloglarDepo"); // Удаляем данные из localStorage при загрузке страницы
  return null;
}

function displayBlog(blogsParametr) {
  const blogPlaceDiv = document.querySelector(".blog-right-side");
  blogPlaceDiv.innerHTML = "";

  if (!Array.isArray(blogsParametr)) {
    console.error("Неверный формат данных для блогов");
    return;
  }

  blogsParametr.forEach(birBlog => {
    const divElement = document.createElement("div");
    divElement.classList.add("blog");
    divElement.innerHTML = `
      <span id="metadata">${birBlog.tarix}</span>
      <h3 class="py-3">${birBlog.title}</h3>
      <a href="${birBlog.url}" class="text-white">Read the article <img src="./images/white-arrow.svg" class="ms-2" alt=""></a>`; // Убедитесь, что здесь указан корректный URL

    blogPlaceDiv.appendChild(divElement);
  });
}

document.addEventListener("DOMContentLoaded", loadData);

function loadData() {
  const blogs = getDataFromLocalStorage();

  if (blogs) {
    console.log("Blog is loading...");
    displayBlog(blogs);
  } else {
    console.log("Blog is not loading..."); 
    fetchBlogs()
      .then(lastStageBlogs => displayBlog(lastStageBlogs))
      .catch(err => console.log(`There is an unexpected problem in the server: ${err.message}`)); 
  }
}



const swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next1",
    prevEl: ".button-prev1",
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



const testimonials = [
  {
      image: 'cd540eb830f6b83165f86c3f8c592012 (1).jpg',
      quote: 'Jade helped us build a software so intuitive that it didn\'t need a walkthrough. He solved complex problems with brilliant design.',
      author: 'John Franklin',
      title: 'Founder, Double Bunch'
  },
  {
      image: 'cd540eb830f6b83165f86c3f8c592012 (1).jpg',
      quote: 'Jade\'s design thinking transformed our project. His ability to understand user needs is exceptional.',
      author: 'Sarah Williams',
      title: 'CEO, Creative Solutions'
  },
  {
      image: 'cd540eb830f6b83165f86c3f8c592012 (1).jpg',
      quote: 'Thanks to Jade, our user engagement increased by 50%. His design  skills are top-notch.',
      author: 'Mike Johnson',
      title: 'Product Manager, Tech Innovators'
  }
];

let currentIndex = 0;

const imageElement = document.getElementById('testimonial-image');
const quoteElement = document.getElementById('testimonial-quote');
const authorElement = document.getElementById('testimonial-author');

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  updateTestimonial();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  updateTestimonial();
});

function updateTestimonial() {
  const testimonial = testimonials[currentIndex];
  imageElement.src = testimonial.image;
  quoteElement.textContent = `"${testimonial.quote}"`;
  authorElement.innerHTML = `${testimonial.author}<br><span class="author-title">${testimonial.title}</span>`;
}

// Initialize with the first testimonial
updateTestimonial();
