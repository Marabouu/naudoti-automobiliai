var triangle = document.getElementById("triangle");
var pyramid = document.getElementById("pyramid");
var reversePyramid = document.getElementById("reverse-pyramid");
var clear = document.getElementById("clear");
var rhomb = document.getElementById("rhomb");

function printOutput(content) {
  document.querySelector("#result").textContent = content;
  const result = document.querySelector("#result");
}

//Trikampio isvedimas
triangle.addEventListener("click", function () {
  function generateTriangle() {
    result.innerHTML = "";
    var totalNumberofRows = 5;
    for (var i = 1; i <= totalNumberofRows; i++) {
      var output = "";
      for (var j = 1; j <= i; j++) {
        //output += j + " ";  dar galimas variantas norint isvesti skaicius
        output += "*";
      }
      document.querySelector("#result").innerHTML += output + "<br />";
    }
  }
  generateTriangle();
});

//Pyramides isvedimas
pyramid.addEventListener("click", function () {
  function generatePyramid() {
    result.innerHTML = "";
    let n = 5;
    let output = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        output += "&nbsp";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        output += "*";
      }

      output += "<br />";
    }
    document.querySelector("#result").innerHTML += output;
  }

  generatePyramid();
});

//Atvirkstines pyramides isvedimas
reversePyramid.addEventListener("click", function () {
  function generateReversePyramid() {
    result.innerHTML = "";
    let n = 5;

    let output = "";

    for (let i = 0; i < n; i++) {
      // isores ciklas

      for (let j = 0; j < i; j++) {
        output += "&nbsp"; // spausdina tarpus
      }

      for (let k = 0; k < 2 * (n - i) - 1; k++) {
        output += "*"; // spausdina zvaigzdutes
      }

      output += "<br>";
    }

    document.querySelector("#result").innerHTML += output;

    console.log(output);
  }
  generateReversePyramid();
});

//Trinimo mygtukas
clear.addEventListener("click", function () {
  function Clear() {
    result.innerHTML = "";
    //document.querySelector("#result").innerHTML += "";
  }
  Clear();
});

//Rombo isvedimas
rhomb.addEventListener("click", function () {
  function generateRhomb() {
    result.innerHTML = "";
    for (i = 1; i <= 5; i++) {
      output = "&nbsp";
      for (j = i; j < 10; j++) {
        output += "&nbsp";
      }
      for (k = 0; k < i * 2 - 1; k++) {
        output += "*";
      }
      document.querySelector("#result").innerHTML += output + "<br />";
    }
    var output = " ";
    for (i = 5 - 1; i >= 1; i--) {
      output = "&nbsp";
      for (j = i; j < 10; j++) {
        output += "&nbsp";
      }
      for (k = 0; k < i * 2 - 1; k++) {
        output += "*";
      }
      document.querySelector("#result").innerHTML += output + "<br />";
    }
  }

  generateRhomb();
});
