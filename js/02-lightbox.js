import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
    .map(({ original, preview, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
        </li>`;
    })
    .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
