const links = document.querySelectorAll('.item')
const burgerOpen = document.querySelector('.burger')
const burgerClose = document.querySelector('.close')
const burgerMenu = document.querySelector('.burger-menu')
const header = document.querySelector('.header')
const aboutBTN = document.querySelector('.btn')
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const works = document.querySelector('#works')
const contact = document.querySelector('#contact')


aboutBTN.addEventListener('click', () => {
    window.scrollTo(0, about.getBoundingClientRect().top - header.clientHeight)
})

links.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.style.width = '0%'
        burgerMenu.style.padding = '0px'

        links.forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
        const pos = item.getAttribute('value')
        console.log(pos);
        if (pos === home.id){
            window.scrollTo(0, home.offsetTop)
        }
        if (pos === about.id){
            window.scrollTo(0, about.offsetTop - header.clientHeight)
        }
        if (pos === works.id){
            window.scrollTo(0, works.offsetTop - header.clientHeight)
        }
        if (pos === contact.id){
            window.scrollTo(0, contact.offsetTop - header.clientHeight)
        }

    })
})

burgerOpen.addEventListener('click', () => {
    burgerMenu.style.width = '100%'
    burgerMenu.style.padding = '30px'
})

burgerClose.addEventListener('click', () => {
    burgerMenu.style.width = '0%'
    burgerMenu.style.padding = '0px'

})

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        header.classList.add('fixed')
    }
    else {
        header.classList.remove('fixed')
    }
})