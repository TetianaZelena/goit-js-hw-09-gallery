import { galleryItems } from'./_gallery_img';
export const elemets = galleryItems.map(({ preview, original, description }) => {
   return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}
  " data-source="${original}" alt="${description}">
  </img></a></li>`;
}).join('');

