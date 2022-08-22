const namesList = ["Tomas", "Ponas", "Antanas", "Petras", "Jurgis"];
const arrayPush = document.getElementById("btn1");
const arrayUnshift = document.getElementById("btn2");
const arrayFirstRemove = document.getElementById("btn3");
const arrayLastRemove = document.getElementById("btn4");
const arrayReverse = document.getElementById("btn5");
const showArray = document.getElementById("btn6");
const inputt = document.getElementById("name");

function createElement(tag, props) {
  const newTag = document.createElement(tag);
  if (props && props.length) {
    props.forEach((singleProp) => {
      newTag[singleProp.name] = singleProp.value;
    });
  }
  return newTag;
}

arrayPush.addEventListener("click", function () {
  const newDiv1 = createElement("div", [{ value: namesList }]);
  namesList.push(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayUnshift.addEventListener("click", function () {
  const newDiv1 = createElement("div", [{ value: namesList }]);
  namesList.unshift(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayFirstRemove.addEventListener("click", function () {
  const newDiv1 = createElement("div", [{ value: namesList }]);
  namesList.shift(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayLastRemove.addEventListener("click", function () {
  const newDiv1 = createElement("div", [{ value: namesList }]);
  namesList.pop(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

arrayReverse.addEventListener("click", function () {
  const newDiv1 = createElement("div", [{ value: namesList }]);
  namesList.reverse(inputt.value);
  newDiv1.append(namesList);

  document.querySelector("#result").append(newDiv1);
});

showArray.addEventListener("click", function () {
  document.querySelector("#result").append(namesList);
});
