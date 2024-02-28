const btnMobile = document.getElementById("btn-mobile-js")
const nav = document.querySelector("nav")

btnMobile.addEventListener("click", () => {
  nav.classList.toggle("active")
})
