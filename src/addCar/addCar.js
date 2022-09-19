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

    localStorage.setItem("addedCarsList", JSON.stringify(cars));
  }

  submit();
});
