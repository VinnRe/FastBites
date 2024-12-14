document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    const popOpenBtn = document.getElementById("popupOpen");
    const popCloseBtn = document.getElementById("popupClose");
    const popupSection = document.getElementById("popupSection");
    const cbNormalBtn = document.getElementById("cbNormal");
    const cbProBtn = document.getElementById("cbPro");
    const cbDeuBtn = document.getElementById("cbDeu");
    const cbTriBtn = document.getElementById("cbTri");
    const body = document.body;

    let currentIndex = 0;

    // Initialize: Show the first image
    function updateCarousel() {
        images.forEach((image, index) => {
            image.classList.toggle("active", index === currentIndex); // Show only the current image
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back if necessary
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length; // Loop forward if necessary
        updateCarousel();
    });

    // Show the initial image
    updateCarousel();

    popOpenBtn.addEventListener("click", function () {
        popupSection.classList.add("popup__section-open");
    });

    popCloseBtn.addEventListener("click", function () {
        popupSection.classList.remove("popup__section-open");
    });

    // Event listeners for colorblind mode buttons
    cbNormalBtn.addEventListener("click", function () {
        body.className = ""; // Reset to default mode
    });

    cbProBtn.addEventListener("click", function () {
        body.className = "protanopia"; // Apply protanopia mode
    });

    cbDeuBtn.addEventListener("click", function () {
        body.className = "deuteranopia"; // Apply deuteranopia mode
    });

    cbTriBtn.addEventListener("click", function () {
        body.className = "tritanopia"; // Apply tritanopia mode
    });
});
