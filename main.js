const navbar = document.getElementById('navbar')
const navlinks = document.getElementById('nav-links')
const contact = document.getElementById('contact-button')
const arrow = document.getElementById('up-arrow')

window.onload = () => {
    checkNavBarVisibility()
}

window.onresize = () => {
    checkNavBarVisibility()
    
    if (window.innerWidth <= 800 && navbar.style.height != "240px") {
        hideNavItems()
    } else {
        showNavItems()
        navbar.style.height = "50px"
    }
}

document.onscroll = () => {
    checkNavBarVisibility()
    checkUpArrow()
}

document.getElementById('up-arrow').onclick = () => {
    window.scrollTo(0, 0)
}

document.getElementById('hamburger').onclick = () => {
    if (navbar.style.height == "240px") {
        setTimeout(() => {
            navbar.style.height = "50px"
        }, 250)
        hideNavItems()
    } else {
        navbar.style.height = "240px"
        setTimeout(() => {
            showNavItems()
        }, 250)
    }
}

function hideNavItems() {
    navlinks.style.visibility = 'hidden'
    navlinks.style.opacity = '0'
    contact.style.visibility = 'hidden'
    contact.style.opacity = '0'
}

function showNavItems() {
    navlinks.style.visibility = 'visible'
    navlinks.style.opacity = '1'
    contact.style.visibility = 'visible'
    contact.style.opacity = '1'
}

function checkNavBarVisibility() {
    if (window.scrollY == 0 && window.innerWidth > 800) {
        navbar.style.backgroundColor = 'transparent'
        navbar.style.boxShadow = 'none'
    } else {
        navbar.style.backgroundColor = '#eee'
        navbar.style.boxShadow = '0 1px 15px rgba(0, 0, 0, .5)'
    }
}

function checkUpArrow() {
    if (window.scrollY < (window.innerHeight / 2)) {
        arrow.style.visibility = 'hidden'
        arrow.style.opacity = '0'
    } else {
        arrow.style.visibility = 'visible'
        arrow.style.opacity = '1'
    }
}