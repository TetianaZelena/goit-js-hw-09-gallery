import './sass/main.scss';
// import { galleryItems } from './js/_gallery_img';
import { elemets } from './js/_element';


const imageList = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const btnClose = document.querySelector(".lightbox__button");
const modalImg = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__overlay");
imageList.insertAdjacentHTML('beforeend', elemets);


imageList.addEventListener('click', modalOpen);

function modalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    modal.classList.add('is-open');
    modalImg.src = event.target.dataset.source;
     modalImg.alt = event.target.alt;
     overlay.addEventListener("click", modalCloseByOverlayClick);
     window.addEventListener('keydown', onEscKeyPress);


  }
   
};
 
btnClose.addEventListener('click', modalClose);


function modalClose() {
  modal.classList.remove('is-open');
  modalImg.removeAttribute("src");
   modalImg.removeAttribute("alt");
   overlay.removeEventListener("click", modalCloseByOverlayClick);
   window.removeEventListener('keydown', onEscKeyPress);
    
}
    
function modalCloseByOverlayClick(event) {
    if (event.currentTarget === event.target) {
        modalClose(event)      
    }
};

function onEscKeyPress(e) {
   const EscKeyCode = 'Escape';
   if (e.code===EscKeyCode) {
     modalClose() 
   }
}


 