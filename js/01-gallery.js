import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markup = galleryItems
  .map(
    (image) => `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src=${image.preview}
            data-source=${image.original}
            alt=${image.description}
          />
        </a>
      </div>`
  )
  .join("");
document.querySelector("div.gallery").insertAdjacentHTML("afterbegin", markup);

document.querySelector("div.gallery").onclick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `
		<img width="1400" height="900" src=${event.target.getAttribute("data-source")}>
	`,
    {
      onClose: () => {
        console.log();
        document.removeEventListener("keydown", closeInstance);
      },
    }
  );
  modal.show();
  function closeInstance(event) {
    if (event.key === "Escape" && modal.visible()) modal.close();
    console.log("click event listener was added");
  }

  document.addEventListener("keydown", closeInstance);

  console.log(document.addEventListener);
};
