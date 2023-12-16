const buttonMenu = document.querySelector('.button_menu')

const menuMobile = document.querySelector('.nav_mobile')
let isMenuOpen = false

buttonMenu.addEventListener('click', function(){
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../image/menu-hamburgue.png') : buttonMenu.children[0].setAttribute('src', '../image/menu-close.png')

    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
    

})