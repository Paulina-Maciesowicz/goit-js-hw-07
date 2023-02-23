import { galleryItems } from "./gallery-items.js";

// Change code below this line
import SimpleLightbox from "simplelightbox";

console.log(galleryItems);

const markup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href=${image.original}>
        <img
          class="gallery__image"
          src=${image.preview}
          alt=${image.description}
        />
      </a>`
  )

  .join("");
document.querySelector("div.gallery").insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
});

// function closeInstance(event) {
//   if (event.key === "Escape" && lightbox.visible()) lightbox.close();
//   console.log("click event listener was added");
// }

// document.addEventListener("keydown", closeInstance);

// console.log(document.addEventListener);
