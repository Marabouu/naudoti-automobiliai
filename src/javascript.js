var triangle = document.getElementById("triangle");
var pyramid = document.getElementById("pyramid");
var reversePyramid = document.getElementById("reverse-pyramid");
var clear = document.getElementById("clear");

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
  function generatePyramid(max = 5) {
    result.innerHTML = "";
    const length = 2 * max - 1;
    for (let i = 1; i <= max; i++) {
      let s = "*".repeat(i).split("").join(" ");
      s = s
        .padStart(s.length + Math.floor((length - s.length) / 2))
        .padEnd(length);
      document.querySelector("#result").innerHTML +=
        s.replace(/\s/g, " &nbsp") + "<br/>";
    }
  }
  generatePyramid(7);
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
