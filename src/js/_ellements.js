import { galleryItems } from './_gallery_img';

const imageList = document.querySelector(".js-gallery");
const newArray = []; 
const elemets = galleryItems.map(({ preview, original, description }) => {
  const item = `<li class="gallery__item">
                <a class="gallery__link"
                href=${original}>
                <img loading="lazy" class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description} />
                </a>
                </li>`;
  newArray.push(item)
});
imageList.insertAdjacentHTML("afterbegin", newArray.join(''))