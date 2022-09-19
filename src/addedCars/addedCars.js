window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("addedCarsList")) {
    const car = JSON.parse(window.localStorage.getItem("addedCarsList"));

    car.forEcah((name) => {
      const carContainer = document.createElement("div");
      carContainer.setAttribute("id", "carContainer");

      const brandParagraph = document.createElement("p");
      brandParagraph.setAttribute("id", "brandParagraph");

      const modelParagraph = document.createElement("p");
      modelParagraph.setAttribute("id", "modelParagraph");

      const yearParagraph = document.createElement("p");
      yearParagraph.setAttribute("id", "yearParagraph");

      const engineParagraph = document.createElement("p");
      engineParagraph.setAttribute("id", "engineParagraph");

      const classParagraph = document.createElement("p");
      classParagraph.setAttribute("id", "classParagraph");

      const carColorParagraph = document.createElement("p");
      carColorParagraph.setAttribute("id", "carColorParagraph");

      brandParagraph.textContent = car.brand;
      modelParagraph.textContent = car.model;
      yearParagraph.textContent = car.year;
      engineParagraph.textContent = car.engine;
      classParagraph.textContent = car.class;
      carColorParagraph.textContent = car.carColor;

      carContainer.append(
        brandParagraph,
        modelParagraph,
        yearParagraph,
        engineParagraph,
        classParagraph,
        carColorParagraph
      );
      document.querySelector("#app").append(carContainer);
    });
  }
});
