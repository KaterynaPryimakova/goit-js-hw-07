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
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>`;
    })
    .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markup);

const galleryItem = document.querySelector(".gallery__item");
const galleryLink = document.querySelector(".gallery__link");
const galleryImage = document.querySelector(".gallery__image");

gallery.addEventListener("click", getBigImage);

function getBigImage(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const urlOfBigImg = event.target.dataset.source;
    console.log(urlOfBigImg);
}
