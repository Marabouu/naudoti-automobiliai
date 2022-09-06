let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let users = [];

submit.addEventListener("click", function () {
  CreateObject();
  CheckInput();
});

class adressBook {
  constructor(object) {
    this.name = object.name;
    this.phone = object.phone;
  }

  getUserContainer() {
    return `<div class="outputContent">
            <div>
            <p>${this.name} </p>
            <p>${this.phone} </p>
            </div>
            <div class="delete">
            <button id="btn1">Trinti</button>
            </div>
            <br>
         </div>`;
    `<br>`;
  }
}

function CreateObject() {
  let user = new adressBook({
    name: input1.value,
    phone: input2.value,
  });
  output.insertAdjacentHTML("beforeend", user.getUserContainer());

  users.push(user);
  console.log(users);
}

function CheckInput() {
  if (input1.value == "" || input2.value == "") {
    alert("Prasom ivesti varda ir telefona");
  }
}
