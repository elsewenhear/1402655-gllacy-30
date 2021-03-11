// feedback variables

const feedbackLink = document.querySelector(".feedback-link");
const modalFeedback = document.querySelector(".modal-feedback");
const modalForm = modalFeedback.querySelector(".feedback-form");
const buttonClose = modalFeedback.querySelector(".button-close");
const modalLogin = modalFeedback.querySelector("[name=feedback-name]");
const modalEmail = modalFeedback.querySelector("[name=feedback-email]");
const modalText = modalFeedback.querySelector("[name=feedback-text]");
const overlay = document.querySelector(".overlay");

// slider variables

const buttonOne = document.querySelector(".button-1");
const buttonTwo = document.querySelector(".button-2");
const buttonThree = document.querySelector(".button-3");
const background = document.querySelector(".page-body");
const slideOne = document.querySelector(".slide-1");
const slideTwo = document.querySelector(".slide-2");
const slideThree = document.querySelector(".slide-3");

// feedback form

let isStorageSupport = true;
let storageLogin = "";
let storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  modalLogin.focus();
  overlay.classList.add("overlay-show");

  if (storageLogin && storageEmail) {
    modalLogin.value = storageLogin;
    modalEmail.value = storageEmail;
    modalText.focus();
  } else {
    modalLogin.focus();
}
});

buttonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  modalFeedback.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
  if (!modalLogin.value || !modalEmail.value || !modalText.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", modalLogin.value);
    localStorage.setItem("email", modalEmail.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

// slides change

buttonOne.addEventListener("click", function(evt) {
  if (buttonOne.classList.contains("current")) {
    evt.preventDefault();
  } else {
    buttonOne.classList.add("current");
    background.classList.add("bg-1");
    slideOne.classList.add("current");
    buttonTwo.classList.remove("current");
    background.classList.remove("bg-2");
    slideTwo.classList.remove("current");
    buttonThree.classList.remove("current");
    background.classList.remove("bg-3");
    slideThree.classList.remove("current");
  }
});

buttonTwo.addEventListener("click", function(evt) {
  if (buttonTwo.classList.contains("current")) {
    evt.preventDefault();
  } else {
    buttonTwo.classList.add("current");
    background.classList.add("bg-2");
    slideTwo.classList.add("current");
    buttonOne.classList.remove("current");
    background.classList.remove("bg-1");
    slideOne.classList.remove("current");
    buttonThree.classList.remove("current");
    background.classList.remove("bg-3");
    slideThree.classList.remove("current");
  }
});

buttonThree.addEventListener("click", function(evt) {
  if (buttonThree.classList.contains("current")) {
    evt.preventDefault();
  } else {
    buttonThree.classList.add("current");
    background.classList.add("bg-3");
    slideThree.classList.add("current");
    buttonOne.classList.remove("current");
    background.classList.remove("bg-1");
    slideOne.classList.remove("current");
    buttonTwo.classList.remove("current");
    background.classList.remove("bg-2");
    slideTwo.classList.remove("current");
  }
});