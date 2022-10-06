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

/*=============== REMOVE MENU MOBILE WHEN CLICK IN NAV LINKS ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== MODAL VIDEOS WORK ===============*/
const btnsClose = document.querySelectorAll(".btn-modal-close");
const btnsOpen = document.querySelectorAll(".show-video");
const modals = document.querySelectorAll(".modal");
const modalContainers = document.querySelectorAll(".modal-container");

// add listeners to show modal buttons
for (let i = 0; i < btnsOpen.length; i++) {
    btnsOpen[i].addEventListener("click", function (e) {
        e.preventDefault();
        modalContainers[i].style.opacity = "1";
        modalContainers[i].style.visibility = "visible";
        modals[i].classList.toggle("modal-close");
    });
}

// add listeners to close modal buttons
for (let i = 0; i < btnsClose.length; i++) {
    btnsClose[i].addEventListener("click", function (e) {
        modals[i].classList.toggle("modal-close")
        setTimeout(function () {
            modalContainers[i].style.opacity = "0";
            modalContainers[i].style.visibility = "hidden";
        }, 700);
    })
}

//add event click outside modal to close
window.addEventListener("click", function (e) {
    for (let i = 0; i < modalContainers.length; i++) {
        if (e.target == modalContainers[i]) {
            const modal = modalContainers[i].childNodes[1];
            if (!modal.classList.contains('modal-close')) {
                modal.classList.toggle("modal-close");
                setTimeout(function () {
                    modalContainers[i].style.opacity = "0";
                    modalContainers[i].style.visibility = "hidden";
                }, 700);
            }
        }
    }
});
