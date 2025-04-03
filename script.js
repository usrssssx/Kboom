const openModalButtons = document.querySelectorAll('.open-modal');
const modalContainers = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');

openModalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modalContainers[index].style.display = 'block';
    });
});

modalCloseButtons.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        modalContainers[index].style.display = 'none';
    });
});


const TOTAL_SLIDES = 4;

let currentIndex = 0;


const dots = document.querySelectorAll(".dots button");


const images = document.querySelectorAll(".images img");

function showSlide(index) {
    images.forEach(image => image.style.display = "none");


    dots.forEach(dot => dot.style.backgroundColor = "transparent");

    images[index].style.display = "block";


    dots[index].style.backgroundColor = "#000";

}

function gotoSlide(index) {
    currentIndex = (TOTAL_SLIDES + index) % TOTAL_SLIDES;
    showSlide(currentIndex);
}



function next() {
    gotoSlide(currentIndex + 1);
}


function prev() {
    gotoSlide(currentIndex - 1);
}



function dotClicked(index) {
    gotoSlide(index);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => dotClicked(index));
});


showSlide(currentIndex);


const open = document.getElementById('open');


const close = document.getElementById('close');


const container = document.getElementById('container');


open.addEventListener('click', () => {
    container.classList.add('open');
});





close.addEventListener('click', () => {
    container.classList.remove('open');
});



const $button = document.querySelector('applic');
const $form = document.querySelector('review');
        
// При клике на кнопку
$button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  $form.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});
