// Javascript Logics

const menuOpen = document.querySelector('.menu_toggle')
const menuUl = document.querySelector('.menu ul')

menuOpen.addEventListener('click', () =>
menuUl.classList.toggle('open')
)