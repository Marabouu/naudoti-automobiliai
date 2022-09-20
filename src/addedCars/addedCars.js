window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("addedCarsList")) {
    const newCars = JSON.parse(window.localStorage.getItem("addedCarsList"));

    newCars.forEach((car) => {
      const carContainer = document.createElement("div");
      carContainer.setAttribute("id", "carContainer");

      const carContainer2 = document.createElement("div");
      carContainer2.setAttribute("id", "carContainer2");
      const carContainer3 = document.createElement("div");
      carContainer3.setAttribute("id", "carContainer3");

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

      const space = document.createElement("br");
      const space2 = document.createElement("br");
      const space3 = document.createElement("br");
      const space4 = document.createElement("br");
      const space5 = document.createElement("br");
      const space6 = document.createElement("br");

      brandParagraph.textContent = "Marke :  " + car.brand;
      modelParagraph.textContent = "Modelis :  " + car.model;
      yearParagraph.textContent = "Metai :  " + car.year;
      engineParagraph.textContent = "Varyklio turis :  " + car.engine;
      classParagraph.textContent = "Kebulo Tipas :  " + car.class;
      carColorParagraph.textContent = "Spalva :  " + car.carColor;
      carPhotoImage.src = car.carImage;

      carContainer.append(
        brandParagraph,
        space2,
        modelParagraph,
        space3,
        yearParagraph,
        space4,
        engineParagraph,
        space5,
        classParagraph,
        space6,
        carColorParagraph
      );
      carContainer2.append(carPhotoImage);

      carContainer3.append(carContainer, carContainer2);

      document.querySelector("#app").append(carContainer3, space);
      console.log(car);
    });
  }
});
