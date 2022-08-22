const namesList = ["Tomas", "Ponas", "Antanas", "Petras", "Jurgis"];
const showArray = document.getElementById("btn6");
const arrayPush = document.getElementById("btn1");
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

showArray.addEventListener("click", function () {
  function input() {
    document.write(namesList);
  }
  input();
});
