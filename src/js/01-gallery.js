import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector("ul.gallery");
let galleryMarkup = '';

galleryItems.forEach((img) => {
    const imges =
        `<li class="gallery__item">
            <a class="gallery__link" href="${img.original}">
            <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
            </a>
     </li>`;

    galleryMarkup += imges;

});

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.style.listStyle = "none";

let lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: "alt",
    captionDelay: 250,
});
