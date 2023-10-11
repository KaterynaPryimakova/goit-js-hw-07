import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
    .map(({ original, preview, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>`;
    })
    .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", getBigImage);

function getBigImage(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const urlOfBigImg = event.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${urlOfBigImg}" width="800" height="600">`
    );
    instance.show();
}
