let input1 = document.getElementById("brand");
let input2 = document.getElementById("model");
let input3 = document.getElementById("year");
let input4 = document.getElementById("engine");
let input5 = document.getElementById("class");
let input6 = document.getElementById("carColor");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
var cars = [];

submit.addEventListener("click", function () {
  function submit() {
    const newCars = {
      brand: input1.value,
      model: input2.value,
      year: input3.value,
      engine: input4.value,
      class: input5.value,
      carColor: input6.value,
    };
    cars.push(newCars);

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

    document
      .getElementById("output")
      .append(
        brandParagraph,
        modelParagraph,
        yearParagraph,
        engineParagraph,
        classParagraph,
        carColorParagraph
      );
    console.log(cars);
    localStorage.setItem("addedCarsList", JSON.stringify(cars));
  }

  submit();
});
