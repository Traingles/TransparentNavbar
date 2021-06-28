window.onload = () => {
    resetNavBar()
}

document.onscroll = () => {
    resetNavBar()
}

function resetNavBar() {
    let navbar = document.getElementById('navbar')
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = 'transparent'
        navbar.style.boxShadow = 'none'
    } else {
        navbar.style.backgroundColor = '#eee'
        navbar.style.boxShadow = '0 1px 15px rgba(0, 0, 0, .5)'
    }
}