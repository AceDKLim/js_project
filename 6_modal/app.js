// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const ModalBtn = document.querySelector('.modal-btn')
const ModalOverlay = document.querySelector('.modal-overlay')
const CloseBtn = document.querySelector('.close-btn')

ModalBtn.addEventListener('click', function () {
    ModalOverlay.classList.add("open-modal");
});

CloseBtn.addEventListener('click', function () {
    ModalOverlay.classList.remove("open-modal")
})