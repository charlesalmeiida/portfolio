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

const navMenu = document.querySelectorAll("#js-nav li a")

function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute("href")
  const section = document.querySelector(href)
  const initPosition = section.offsetTop

  window.scrollTo({
    top: initPosition,
    behavior: "smooth",
  })
}

navMenu.forEach((link) => {
  link.addEventListener("click", scrollToSection)
})
