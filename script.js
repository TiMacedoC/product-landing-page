function openBuyingModal() {
    document.querySelector(".modal-wrapper").id = "active";
};

function closeBuyingModal() {
    document.querySelector(".modal-wrapper").id = "";
};

function openContactModal(event) {
    event.preventDefault();
    document.querySelector(".contact").id = "active";
};

function closeContactModal() {
    document.querySelector(".contact").id = "";
};


// Fechar modal com ESC
window.addEventListener('keydown', (e) => {
    if (e.code == "Escape") {
        closeBuyingModal();
        closeContactModal();
    }
});

//Fechar modal clicando fora
window.onclick = function (event) {
    if (event.target.id == "active") {
        closeBuyingModal();
        closeContactModal();
    }
};