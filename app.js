const menuOpen = document.querySelector('.menu_toggle')
const menuUl = document.querySelector('.menu ul')
console.log(menuUl);

menuOpen.addEventListener('click', () =>
// console.log('d')
menuUl.classList.toggle('open')
)