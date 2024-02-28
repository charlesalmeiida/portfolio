AOS.init({
  duration: 1000,
  once: true,
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  speed: 400,
  pagination: {
    el: ".bottom .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
})
