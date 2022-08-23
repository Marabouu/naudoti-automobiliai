const namesList = ["Tomas", "Ponas", "Antanas", "Petras", "Jurgis"];
const arrayPush = document.getElementById("btn1");
const arrayUnshift = document.getElementById("btn2");
const arrayFirstRemove = document.getElementById("btn3");
const arrayLastRemove = document.getElementById("btn4");
const arrayReverse = document.getElementById("btn5");
const inputt = document.getElementById("name");
function stringToP() {
  result.innerHTML = "";
  namesList.forEach((name) => {
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = name;
    document.querySelector("#result").append(nameParagraph);
    inputt.value = "";
  });
}
arrayPush.addEventListener("click", function () {
  namesList.push(inputt.value);
  stringToP();
});
arrayUnshift.addEventListener("click", function () {
  namesList.unshift(inputt.value);
  stringToP();
});
arrayFirstRemove.addEventListener("click", function () {
  namesList.shift(inputt.value);
  stringToP();
});
arrayLastRemove.addEventListener("click", function () {
  namesList.pop(inputt.value);
  stringToP();
});
arrayReverse.addEventListener("click", function () {
  namesList.reverse(inputt.value);
  stringToP();
});
