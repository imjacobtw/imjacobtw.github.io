function navMenuOpen() {
    document.getElementById('nav-menu').style.transform = 'translateY(0%)'
    document.querySelector('body').style.overflowY = 'hidden'
}

function navMenuClose() {
    document.getElementById('nav-menu').style.transform = 'translateY(-100%)'
    document.querySelector('body').style.overflowY = 'visible'
}

