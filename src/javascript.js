const namesList = ["Tomas", "Ponas", "Antanas", "Petras", "Jurgis"];
const arrayPush = document.getElementById("btn1");
const arrayUnshift = document.getElementById("btn2");
const arrayFirstRemove = document.getElementById("btn3");
const arrayLastRemove = document.getElementById("btn4");
const arrayReverse = document.getElementById("btn5");
const inputt = document.getElementById("name");

arrayPush.addEventListener("click", function () {
  namesList.push(inputt.value);
  namesList.forEach((name) => {
    const nameParagraph = document.createElement("p", [
      { name: "textContent", value: name },
    ]);

    //newDiv1.append(nameParagraph);
    document.querySelector("#result").append(nameParagraph);
  });
});

//arrayPush.addEventListener("click", function () {
//const newDiv1 = document.createElement("div");
//namesList.push(inputt.value);
//newDiv1.append(namesList);

//document.querySelector("#result").append(newDiv1);
//});

arrayUnshift.addEventListener("click", function () {
  const newDiv1 = document.createElement("div");
  namesList.unshift(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayFirstRemove.addEventListener("click", function () {
  const newDiv1 = document.createElement("div");
  namesList.shift(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayLastRemove.addEventListener("click", function () {
  const newDiv1 = document.createElement("div");
  namesList.pop(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayReverse.addEventListener("click", function () {
  const newDiv1 = document.createElement("div");
  namesList.reverse(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});
