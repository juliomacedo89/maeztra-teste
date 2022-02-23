$(document).ready(function() {
    
    /* BANNER CAROUSEL */
    $('.banner__container-carousel').slick({
        dots: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1500,
            
            prevArrow: $("#arrow-prev"),
            nextArrow: $("#arrow-next"),
            responsive: [
            {
                breakpoint: 360,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1500,
                prevArrow: $("#arrow-prev"),
                nextArrow: $("#arrow-next")
                
                }
        }]
    });
}); 

/* CLOSE MODAL E-MAIL */
const modal = document.querySelector('[data-modal]');
const spanClose = document.querySelector('.closeModal')
const backHome = document.querySelector('.backHome')

modal.addEventListener('click', closeModal)
backHome.addEventListener('click', closeModal)

function closeModal(event){
        
    if(event.target === this || event.target === spanClose) 
        modal.classList.add('disable')
}


/* VERIFICAÇÃO DE E-MAIL */
const button = document.querySelector('.modal-send')
button.addEventListener('click', enviar)

function enviar (){
    const input = document.querySelector('.modal-email').value
    const spanNoEmail = document.querySelector('.noEmail')
    const invalidEmail = document.querySelector('.invalidEmail')
    const emailContainer = document.querySelector('.emailSucess__container')
    const modalContainer = document.querySelector('.modal__container')
    const getEmail = document.querySelector('.getEmail')


    if(input === '' || input === undefined){
        spanNoEmail.classList.add('active')

    } else if (input.includes('@', '.com', '.com.br') === false){
        invalidEmail.classList.add('active')
        
    }else{
        emailContainer.classList.add('active')
        modalContainer.style.display = 'none'
        getEmail.innerHTML = input
    }
}

/* FOOTER */
const information = document.querySelector('.information')
const account = document.querySelector('.account')
const aboutUs = document.querySelector('.aboutUs')

information.addEventListener('click', ()=>{
    const navInformation = document.querySelector('.nav-information')
    navInformation.classList.toggle('active')
    navInformation.style.cursor = 'pointer'
})

information.addEventListener('mouseenter', ()=>{
    information.style.cursor = 'pointer'
})

account.addEventListener('click', ()=>{
    const navAccount = document.querySelector('.nav-account')
    navAccount.classList.toggle('active')
    navAccount.style.cursor = 'pointer'
})

account.addEventListener('mouseenter', ()=>{
    account.style.cursor = 'pointer'
})

aboutUs.addEventListener('click', ()=>{
    const navAboutUs = document.querySelector('.nav-aboutUs')
    navAboutUs.classList.toggle('active')
    navAboutUs.style.cursor = 'pointer'
})

aboutUs.addEventListener('mouseenter', ()=>{
    aboutUs.style.cursor = 'pointer'
})


/* ABRIR E FECHAR MENU MOBILE */
const drawer = document.querySelector('.drawer')
const menuMobile = document.querySelector('.menuMobile')

drawer.addEventListener('click', ()=>{
    menuMobile.classList.add('active')
})

const closeMenuMobile = document.querySelector('.close-mobile')
closeMenuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('active')
})


