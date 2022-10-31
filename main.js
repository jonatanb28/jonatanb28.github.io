/*---MENU SHOW*/

const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener(`click`,()=>{
            nav.classList.toggle(`show`)
        })
    }
}

showMenu(`nav-toggle`,`nav-menu`);


/*---ACTIVE AND REMOVE MENU---*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction=()=>{
    // Active Link
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active");

    // Remove Link
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction));


/*---SCROLL REVEAL ANIMATION---*/

const sr = ScrollReveal({
    origin: `bottom`,
    distance: `80px`,
    duration: 1600,
    reset: true
})


/*---SCROLL HOME*/

sr.reveal(".home__title",{})
sr.reveal(".button",{delay: 100})
sr.reveal(".home__img",{delay: 400})
sr.reveal(".home__social",{interval: 200})
sr.reveal(".home__social-icon",{interval: 200})

/*---SCROLL ABOUT*/

sr.reveal(`.about__container`,{})
sr.reveal(`.about__subtitle`,{delay:200})
sr.reveal(`.about__text`,{delay:400})

/*SCROLL SKILLS*/

sr.reveal(`.skills__subtitle`,{})
sr.reveal(`.skills__text`,{delay:200})
sr.reveal(`.skills__data`,{interval:200})
sr.reveal(`.skills__img`,{delay:200})


/*SCROLL WORK*/

sr.reveal(`.work__img`,{interval:200})

/*SCROLL CONTACT*/

sr.reveal(`.contact__input`,{interval:200})


/*FORMULARIO*/

let form = document.querySelector(".contact__form");

form.addEventListener(`submit`, function(){

    nombre = document.querySelector("#nombre").value;
    mail = document.querySelector("#mail").value;
    mensaje = document.querySelector("#textarea").value; 

    console.log(nombre, mail, mensaje);
    
})