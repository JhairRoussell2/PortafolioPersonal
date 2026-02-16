/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_YOUR_SERVICE_ID','template_YOUR_TEMPLATE_ID','#contact-form','YOUR_PUBLIC_KEY')
   .then(() =>{
      // Show sent message
      contactMessage.textContent = 'Mensaje enviado correctamente ✅'

      // Remove message after five seconds
      setTimeout(() =>{
         contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()
   }, () =>{
      // Show error message
      contactMessage.textContent = 'Error al enviar el mensaje ❌'
   })
}
if (contactForm) contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
   
const scrollActive = () =>{
   const scrollY = window.pageYOffset

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      }else{
         sectionsClass.classList.remove('active-link')
      }                                                    
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== PROJECTS FILTER ===============*/
const projectsFilterBtns = document.querySelectorAll('.projects__filter-btn')
const projectsCards = document.querySelectorAll('.projects__card')

const filterProjects = (filterValue) => {
  projectsCards.forEach(card => {
    const category = card.getAttribute('data-category')
    const show = filterValue === 'all' || category === filterValue
    card.classList.toggle('hide', !show)
  })
}

projectsFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter')
    projectsFilterBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    filterProjects(filter)
  })
})

/*=============== SKILLS TABS (Técnicas / Interpersonales) ===============*/
document.addEventListener('DOMContentLoaded', function () {
  var skillsSection = document.getElementById('skills')
  if (!skillsSection) return
  skillsSection.addEventListener('click', function (e) {
    var tab = e.target.closest('.skills__tab')
    if (!tab) return
    var panel = tab.getAttribute('data-panel')
    if (!panel) return
    skillsSection.classList.remove('skills--tecnicas', 'skills--interpersonales')
    skillsSection.classList.add('skills--' + panel)
    skillsSection.querySelectorAll('.skills__tab').forEach(function (t) { t.classList.remove('active') })
    tab.classList.add('active')
  })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true // Animations repeat
})

sr.reveal(`.home__data, .experience__container, .projects__container, .education__container, .contact__container`)
sr.reveal(`.home__image`, {delay: 600})
sr.reveal(`.home__social`, {delay: 600, interval: 100})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__image`, {origin: 'right'})
sr.reveal(`.projects__card`, {interval: 100})
