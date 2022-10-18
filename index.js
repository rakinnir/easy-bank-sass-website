const hamburgerButton = document.querySelector(".hamburger")
const closeButton = document.querySelector(".close")
const dropDownNav = document.querySelector(".nav_list")
const nav = document.querySelector(".nav")

hamburgerButton.addEventListener("click", () => {
  closeButton.setAttribute("data-visible", true)
  hamburgerButton.setAttribute("data-visible", false)
  dropDownNav.setAttribute("data-dropdown", true)
  nav.classList.add("dark-overlay")
})

closeButton.addEventListener("click", () => {
  closeButton.setAttribute("data-visible", false)
  hamburgerButton.setAttribute("data-visible", true)
  dropDownNav.setAttribute("data-dropdown", false)
  nav.classList.remove("dark-overlay")
})
