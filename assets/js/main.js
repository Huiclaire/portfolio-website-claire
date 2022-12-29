/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactMessage = document.getElementById('contact-message'),
      contactNotice = document.getElementById('contact-notice')

const sendEmail = (e) =>{
  e.preventDefault()

  // check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
    // Add and remove color
    contactNotice.classList.remove('color-blue')
    contactNotice.classList.add('color-red')

    // Show input field notice
    contactNotice.textContent = 'Write all the input fields 💁🏻‍♀️'
  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_qbdqjjw','template_btooqrm','#contact-form','9TX9W8mblwnh2ERa7')
        .then(() =>{
          // show message and add color
          contactNotice.classList.add('color-blue')
          contactNotice.textContent = 'Message sent ✅'

          // Remove message after five seconds
          setTimeout(() =>{
            contactNotice.textContent = ''
          }, 5000)
        }, (error) =>{
          alert('OOPS! SOMETHING HAS FAILED...', error)
        })

      // To clear the input field
      contactName.value = ''
      contactEmail.value = ''
      contactMessage.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
