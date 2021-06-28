window.onload = () => {
    checkNavBar()
}

document.onscroll = () => {
    checkNavBar()
    checkUpArrow()
}

document.getElementById('up-arrow').onclick = () => {
    window.scrollTo(0,0)
}

function checkNavBar() {
    let navbar = document.getElementById('navbar')
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = 'transparent'
        navbar.style.boxShadow = 'none'
    } else {
        navbar.style.backgroundColor = '#eee'
        navbar.style.boxShadow = '0 1px 15px rgba(0, 0, 0, .5)'
    }
}

function checkUpArrow() {
    let arrow = document.getElementById('up-arrow')
    if (window.scrollY < (window.innerHeight / 2)) {
        arrow.style.visibility = 'hidden'
        arrow.style.opacity = '0'
    } else {
        arrow.style.visibility = 'visible'
        arrow.style.opacity = '1'
    }
}