import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const markup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href=${image.original}>
        <img
          class="gallery__image"
          src=${image.preview}
          alt="${image.description}"
        />
      </a>`
  )

  .join("");
document.querySelector("ul.gallery").insertAdjacentHTML("afterbegin", markup);

(function () {
  new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
})();
