let input1 = document.getElementById("brand");
let input2 = document.getElementById("model");
let input3 = document.getElementById("year");
let input4 = document.getElementById("engine");
let input5 = document.getElementById("class");
let input6 = document.getElementById("carColor");
let input7 = document.getElementById("carImage");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let cars = [];

window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("addedCarsList")) {
    cars = JSON.parse(window.localStorage.getItem("addedCarsList"));
  }
});

submit.addEventListener("click", function () {
  function submit() {
    const newCar = {
      brand: input1.value,
      model: input2.value,
      year: input3.value,
      engine: input4.value,
      class: input5.value,
      carColor: input6.value,
      carImage: input7.value,
    };
    cars.push(newCar);

    localStorage.setItem("addedCarsList", JSON.stringify(cars));
  }

  submit();
});
