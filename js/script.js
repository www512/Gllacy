var feedback = document.querySelector(".address-feedback a");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("textarea");
var names = popup.querySelector("[name=name]");

feedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-show");
    overlay.classList.add("modal-feedback-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    overlay.classList.remove("modal-feedback-show");
    popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("modal-feedback-show");
        overlay.classList.remove("modal-feedback-show");
        popup.classList.remove("modal-error");
    }
});
form.addEventListener("submit", function (evt) {
    if (!email.value || !text.value || !names.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});