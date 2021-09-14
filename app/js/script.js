const submitBtn = document.querySelector(".hero__form__btn");
const emailInput = document.querySelector(".hero__form__input");
const errorMessage = document.querySelector(".hero__form__error");

submitBtn.addEventListener("click", () => {
  // You can include your own regex for email validation, this is only a test
  if (emailInput.value === "" || !(emailInput.value.indexOf("@") > -1)) {
    console.log(errorMessage);
    errorMessage.style.display = "block";
    emailInput.removeAttribute("placeholder");
    emailInput.style.borderColor = "var(--light-red)";
  }
});
