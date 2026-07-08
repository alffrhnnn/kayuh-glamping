/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryItems.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img class="lightbox-image" src="" alt="Gallery Image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeButton = lightbox.querySelector(".close-lightbox");

    galleryItems.forEach(item => {

        item.addEventListener("click", function (e) {

            e.preventDefault();

            const image = this.querySelector("img");

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    closeButton.addEventListener("click", () => {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}