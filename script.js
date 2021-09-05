function openBuyingModal() {

    document.querySelector(".modal-wrapper").id = "active"

}


function closeBuyingModal() {

    document.querySelector(".modal-wrapper").id = ""

}

function openContactModal() {
    document.querySelector(".contact").id = "active"
}

function closeContactModal() {
    document.querySelector(".contact").id = ""
}


window.addEventListener('keydown', (e) => {

    if (e.code == "Escape") {
        closeBuyingModal();
        closeContactModal();
    }
})