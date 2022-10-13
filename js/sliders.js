(function () {
  const slider = [...document.querySelectorAll(".slider__body")];
  const arrowNext = document.querySelector("#next");
  const arrowBefore = document.querySelector("#before");
  let value;

  arrowNext.addEventListener("click", () => changePosition(1));

  arrowBefore.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(
      document.querySelector(".slider__body--show").dataset.id
    );

    value = currentElement;
    value += change;

    console.log(slider.length);
    if (value === 0 || value == slider.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    slider[currentElement - 1].classList.toggle("slider__body--show");
    slider[value - 1].classList.toggle("slider__body--show");
  }
})();
