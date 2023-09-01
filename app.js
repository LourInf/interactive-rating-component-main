let raitingContainer = document.querySelector(".rating");
let rateNumber = document.querySelector(".chosen-nr");
let submitButton = document.querySelector(".submit-btn");
let ratingCard = document.querySelector(".rating-card");
let thankyouCard = document.querySelector(".thankyou-card");

raitingContainer.addEventListener("click", (event1) => {
  let numberSelected = event1.target.innerText;
  rateNumber.innerText = numberSelected;
  if (numberSelected > 0 && numberSelected <= 5) {
    submitButton.addEventListener("click", () => {
      ratingCard.style.display = "none";
      thankyouCard.style.display = "flex";
    });
  }
});
