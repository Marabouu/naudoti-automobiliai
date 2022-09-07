let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let users = [];

submit.addEventListener("click", function () {
  function submit() {
    const nameParagraph = document.createElement("p");
    nameParagraph.setAttribute("id", "nameParagraph");
    const phoneParagraph = document.createElement("p");
    phoneParagraph.setAttribute("id", "phoneParagraph");

    const inputs1 = document.createTextNode(input1.value);

    const inputs2 = document.createTextNode(input2.value);

    nameParagraph.appendChild(inputs1);

    phoneParagraph.appendChild(inputs2);

    document.getElementById("output").append(nameParagraph, phoneParagraph);
  }

  submit();
});
