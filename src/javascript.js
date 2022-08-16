var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var submit = document.getElementById("submit");
document.getElementById("input1").value = localStorage.getItem("server");
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

submit.addEventListener("click", function () {
  function submit() {
    card.innerHTML = "";

    const newDiv1 = document.createElement("div");
    newDiv1.setAttribute("id", "newdiv1");
    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("id", "newdiv2");
    const newDiv3 = document.createElement("div");
    newDiv3.setAttribute("id", "newdiv3");
    const inputs1 = document.createTextNode(input1.value);

    const inputs2 = document.createTextNode(input2.value);

    const inputs3 = document.createTextNode(input3.value);

    newDiv1.appendChild(inputs1);

    newDiv2.appendChild(inputs2);

    newDiv3.appendChild(inputs3);

    document.getElementById("card").append(newDiv1, newDiv2, newDiv3);

    var input = document.getElementById("input1").value;
    localStorage.setItem("server", input);
  }

  submit();
});

sssubmit.addEventListener("click", function () {
  function submit() {
    card.innerHTML = "";
    // create a new div element
    const newDiv = document.createElement("div");
    x = input1.value + input2.value + input3.value;
    // and give it some content
    const inputs = document.createTextNode(x);

    // add the text node to the newly created div
    newDiv.appendChild(inputs);

    // add the newly created element and its content into the DOM
    //const currentDiv = document.getElementById("div");
    //document.body.insertBefore(newDiv, currentDiv);
    document.getElementById("card").appendChild(newDiv);
  }

  submit();
});

ssubmit.addEventListener("click", function () {
  function submit() {
    result.innerHTML = "";
    var totalNumberofRows = 5;
    for (var i = 1; i <= totalNumberofRows; i++) {
      var output = "&nbsp";
      for (var j = 1; j <= i; j++) {
        //output += j + " ";  dar galimas variantas norint isvesti skaicius
        output += "*" + "&nbsp";
      }
      document.querySelector("#result").innerHTML += output + "<br />";
    }
  }
  submit();
});
