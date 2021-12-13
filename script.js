const barsEl = document.querySelector('#bars');
const navEl = document.querySelector('nav');
const h2El = document.querySelector('h2');

barsEl.addEventListener('click', () => {
    navEl.classList.toggle('d-none');
});

window.addEventListener('scroll', () => {
    h2El.classList.add('blue');
    
});