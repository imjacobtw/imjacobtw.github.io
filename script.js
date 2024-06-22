const navMenu = document.getElementById('nav-menu')
const bodyWrapper = document.getElementById('body-wrapper')

function navMenuOpen() {
    navMenu.style.transform = 'translateY(0%)'
    bodyWrapper.style.overflowY = 'hidden'
}

function navMenuClose() {
    navMenu.style.transform = 'translateY(-100%)'
    bodyWrapper.style.overflowY = 'visible'
}

