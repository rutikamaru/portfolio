// slider
var swiper = new Swiper(".swiper--collection", {
  grabCursor: true,
  initialSlide: 0,
  slidesPerView: 8,
  loopedSlides: 8,
  spaceBetween: 20,
  speed: 1000,
  freeMode: false,
  loop: true,
  // autoplay: {
  //     delay: 1500
  // },
  navigation: {
    nextEl: ".slider__next",
    prevEl: ".slider__prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 7,
      spaceBetween: 15,
    },
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
}); 

// slider
var swiper = new Swiper(".businescardsldier", {
  grabCursor: true,
  initialSlide: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 1000,
  },
  loopedSlides: 1,
  spaceBetween: 20,
  speed: 1000,
  freeMode: false,
  loop: true,
  // autoplay: {
  //     delay: 1500
  // },
  navigation: {
    nextEl: ".slider__next",
    prevEl: ".slider__prev",
  }, 
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
}); 

// sticky header
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// tabon hover
$(document).ready(function() {
  $(".tab-hover").hover(function() {
      var target = $(this).data("tab-target");
      $(".tab-pane").removeClass("active");
      $(target).addClass("active"); 
  });
});

// bg fix
document.addEventListener("scroll", function () {
  const parallaxElement = document.querySelector(".img-parallax");
  const section = document.querySelector(".swiper-slidee");
  const sectionRect = section.getBoundingClientRect();

  // Check if the section is in the viewport
  if (sectionRect.bottom > 0 && sectionRect.top < window.innerHeight) {
      const scrollOffset = window.pageYOffset - section.offsetTop;
      parallaxElement.style.transform = `translateY(${scrollOffset * 0.5}px)`; // Adjust speed with multiplier
  }
});