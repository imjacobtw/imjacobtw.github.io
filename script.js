function navMenuOpen() {
    document.getElementById('nav-menu').style.transform = 'translateY(0%)'
    document.body.style.overflow = 'hidden'
}

function navMenuClose() {
    document.getElementById('nav-menu').style.transform = 'translateY(-100%)'
    document.body.style.overflow = 'visible'
}

