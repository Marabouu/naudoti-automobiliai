window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("addedCarsList")) {
    const newCars = JSON.parse(window.localStorage.getItem("addedCarsList"));
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

    brandParagraph.textContent = newCars.brand;
    modelParagraph.textContent = newCars.model;
    yearParagraph.textContent = newCars.year;
    engineParagraph.textContent = newCars.engine;
    classParagraph.textContent = newCars.class;
    carColorParagraph.textContent = newCars.carColor;

    carContainer.append(
      brandParagraph,
      modelParagraph,
      yearParagraph,
      engineParagraph,
      classParagraph,
      carColorParagraph
    );
    document.querySelector("#app").append(carContainer);
  }
});
