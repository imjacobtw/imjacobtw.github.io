const navMenu = document.getElementById('nav-menu')
const body = document.querySelector('body')

function navMenuOpen() {
    navMenu.style.transform = 'translateY(0%)'
    body.style.overflowY = 'hidden'
}

function navMenuClose() {
    navMenu.style.transform = 'translateY(-100%)'
    body.style.overflowY = 'visible'
}

