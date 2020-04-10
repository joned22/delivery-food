const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector ('.modal');
const clsoe = document.querySelector ('.close');

cartButton.addEventListener('click', toggleModal);


clsoe.addEventListener('click', toggleModal);


function toggleModal() {
    modal.classList.toggle('is-open');
}
new WOW().init();