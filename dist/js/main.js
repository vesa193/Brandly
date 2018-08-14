const parallax = document.querySelector('#parallax')

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';

})


const hamb = document.querySelector('.nav__hamburger')

hamb.addEventListener('click', function () {
    let menu = document.querySelector('.nav__items')
    menu.classList.toggle('nav__items--close')
})



const headerContent = document.querySelector('.header__content')

window.addEventListener('load', function () {
    headerContent.classList.add('header__content--fade')
    //console.log('radi')
})