import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

gallery.addEventListener("click", openBigImage);

function openBigImage(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const lightbox = new SimpleLightbox(".gallery .gallery__link", {
        captionType: "alt",
        captionDelay: 250,
    });
}
