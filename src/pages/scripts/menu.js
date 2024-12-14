document.addEventListener("DOMContentLoaded", function () {
    const popOpenBtn = document.getElementById("popupOpen");
    const popCloseBtn = document.getElementById("popupClose");
    const popupSection = document.getElementById("popupSection");
    const cbNormalBtn = document.getElementById("cbNormal");
    const cbProBtn = document.getElementById("cbPro");
    const cbDeuBtn = document.getElementById("cbDeu");
    const cbTriBtn = document.getElementById("cbTri");
    const body = document.body;

    popOpenBtn.addEventListener("click", function () {
        popupSection.classList.add("popup__section-open");
    });

    popCloseBtn.addEventListener("click", function () {
        popupSection.classList.remove("popup__section-open");
    });

    cbNormalBtn.addEventListener("click", function () {
        body.className = "";
    });

    cbProBtn.addEventListener("click", function () {
        body.className = "protanopia";
    });

    cbDeuBtn.addEventListener("click", function () {
        body.className = "deuteranopia";
    });

    cbTriBtn.addEventListener("click", function () {
        body.className = "tritanopia";
    });
});