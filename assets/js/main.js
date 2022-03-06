/*================ Change Background Header ================ */
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*================ Services Modal ================ */
const modelViews = document.querySelectorAll(".services_modal"),
    modelBtns = document.querySelectorAll(".services_button"),
    modelClose = document.querySelectorAll(".services_modal-close") 

let modal = function (modalClick) {
  modelViews[modalClick].classList.add("active-modal")
}

modelBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
}) 

modelClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    modelViews.forEach((mv) => {
      mv.classList.remove("active-modal")
    })
  })
})

/*================ Mix Filter Portfolio ================ */
let mixerPortfolio = mixitup(".work_container", {
  selectors: {
      target: '.work_card'
  },
  animation: {
      duration: 300
  }
});

// Link Active Work
const linkWork = document.querySelectorAll(".work_item")

function activeWork() {
  linkWork.forEach(l => l.classList.remove("active-work"))
  this.classList.add("active-work")
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*============ Scroll Section Active Link ============ */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*================ Light Dark Theme ================ */
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*============ Scroll Animation ============ */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  dealy: 400,
  // rest: true,
})

sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, {dealy: 700})
sr.reveal(`.home_social, .home_scroll`, {dealy: 900, origin: 'bottom'})






