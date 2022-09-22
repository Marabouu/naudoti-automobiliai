let selectedBrand = "";
let newCars = [];

let submit = document.getElementById("showCars");

function appendResult() {
  newCars

    .filter((car) => car.brand === selectedBrand || !selectedBrand)
    .forEach((car) => {
      const carContainer = document.createElement("div");
      carContainer.setAttribute("id", "carContainer");

      const carContainer2 = document.createElement("div");
      carContainer2.setAttribute("id", "carContainer2");

      const carContainer3 = document.createElement("div");
      carContainer3.setAttribute("id", "carContainer3");

      const carContainer4 = document.createElement("div");
      carContainer4.setAttribute("id", "carContainer4");

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

      const carPhotoImage = document.createElement("img");
      carPhotoImage.setAttribute("height", 200);
      carPhotoImage.setAttribute("width", 280);

      const gearboxParagraph = document.createElement("p");
      gearboxParagraph.setAttribute("id", "gearboxParagraph");

      const fuelParagraph = document.createElement("p");
      fuelParagraph.setAttribute("id", "fuelParagraph");

      const mileageParagraph = document.createElement("p");
      mileageParagraph.setAttribute("id", "mileageParagraph");

      const space = document.createElement("br");

      brandParagraph.textContent = "Marke :  " + car.brand;
      modelParagraph.textContent = "Modelis :  " + car.model;
      yearParagraph.textContent = "Metai :  " + car.year;
      engineParagraph.textContent = "Varyklio turis :  " + car.engine;
      classParagraph.textContent = "Kebulo Tipas :  " + car.class;
      carColorParagraph.textContent = "Spalva :  " + car.carColor;
      gearboxParagraph.textContent = "Pavaru Deze :  " + car.gearbox;
      fuelParagraph.textContent = "Kuro Tipas :  " + car.fuel;
      mileageParagraph.textContent = "Rida :  " + car.mileage;
      carPhotoImage.src = car.carImage;

      carContainer.append(
        brandParagraph,
        modelParagraph,
        yearParagraph,
        engineParagraph,
        classParagraph
      );

      carContainer4.append(
        carColorParagraph,
        gearboxParagraph,
        fuelParagraph,
        mileageParagraph
      );

      carContainer2.append(carPhotoImage);

      carContainer3.append(carContainer, carContainer4, carContainer2);

      document.querySelector("#app").append(carContainer3, space);
      console.log(car);
    });
}
window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("addedCarsList")) {
    newCars = JSON.parse(window.localStorage.getItem("addedCarsList"));
    appendResult();

    var select = document.getElementById("select");
    select.addEventListener("change", (e) => {
      selectedBrand = e.target.value;
      document.querySelector("#app").textContent = "";
      appendResult();
    });

    newCars
      .filter((v, i) => newCars.findIndex((car) => car.brand === v.brand) === i)
      .forEach((car) => {
        let o = document.createElement("option");

        o.textContent = car.brand;
        select.appendChild(o);
      });
  }
});

submit.addEventListener("click", function () {
  document.getElementById("select").selectedIndex = 0;
  document.querySelector("#app").textContent = "";
  selectedBrand = null;
  appendResult();
});
