var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output");
var buttonClick = document.querySelector("#btn-click");
var reset=document.querySelector("#reset");

function leapYear() {
  let output = "";

  let year = Number(inputText.value);

  if (typeof year != "number" || isNaN(year) || year.toString().length < 4) {
    alert("Year can only be in YYYY format");
  } else {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      output = "The year you entered is a Leap Year";
    } else {
      output = "The year you entered not a Leap Year";
    }
    outputText.innerText = output;
  }
}

function resetAll(){
    console.log("inside reset");
    inputText.value="";
    outputText.innerText="";
}

buttonClick.addEventListener("click", leapYear);

reset.addEventListener("click",resetAll)
