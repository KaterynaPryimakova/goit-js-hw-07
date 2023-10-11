import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markup = galleryItems
    .map((item) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
        </li>`;
    })
    .join("");

console.log(markup);
const gallery = document.querySelector(".gallery");
console.log(gallery);
gallery.insertAdjacentHTML("beforeend", markup);
