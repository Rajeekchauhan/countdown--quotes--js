const quotes = document.querySelectorAll("blockquote");

const buttonNext = document.getElementById("next_button");

let activeIndex = 0;

quotes[activeIndex].style.display = "block";

buttonNext.addEventListener("click", function () {
  quotes[activeIndex].style.display = "none";

  activeIndex = activeIndex + 1;

  if (activeIndex >= quotes.length) {
    activeIndex = 0;
  }

  quotes[activeIndex].style.display = "block";
});
