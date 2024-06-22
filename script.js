function navMenuOpen() {
    document.getElementById('nav-menu').style.transform = 'translateY(0%)'
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('main').style.overflowY = 'hidden'
}

function navMenuClose() {
    document.getElementById('nav-menu').style.transform = 'translateY(-100%)'
    document.querySelector('body').style.overflowY = 'visible'
    document.querySelector('main').style.overflowY = 'visible'
}

