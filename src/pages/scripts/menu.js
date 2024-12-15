document.addEventListener("DOMContentLoaded", function () {
    const popOpenBtn = document.getElementById("popupOpen");
    const popOpenBtnM = document.getElementById("popupOpenM");
    const popCloseBtn = document.getElementById("popupClose");
    const popupSection = document.getElementById("popupSection");
    const cbNormalBtn = document.getElementById("cbNormal");
    const cbProBtn = document.getElementById("cbPro");
    const cbDeuBtn = document.getElementById("cbDeu");
    const cbTriBtn = document.getElementById("cbTri");
    const body = document.body;

    document.getElementById('hamburgerMenu').addEventListener('click', function () {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('show');
        console.log(":ASLJKDA")
    });

    document.getElementById('closeMenu').addEventListener('click', function () {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('show');
    });

    popOpenBtnM.addEventListener("click", function () {
        popupSection.classList.add("popup__section-open");
    });

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

    if ('speechSynthesis' in window) {
        const speakItems = document.querySelectorAll(".speak-item");
        const ttsToggle = document.getElementById("ttsToggle");
    
        let ttsEnabled = false;
    
        ttsToggle.addEventListener("change", () => {
            ttsEnabled = ttsToggle.checked;
        });
    
        const speakText = (text) => {
            if (!ttsEnabled) return;
    
            window.speechSynthesis.cancel();
    
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        };
    
        speakItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                const text = item.getAttribute("data-text");
                speakText(text);
            });
        });
    } else {
        console.error("Speech synthesis is not supported in this browser.");
    }
});
