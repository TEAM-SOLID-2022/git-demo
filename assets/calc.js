 "use strict";
let display = document.getElementById("result");
let x = 0;
let isOperateClick = false;
let operation;

function dsp(val) {
  if (isOperateClick == true) {
    display.value = "";
    isOperateClick = false;
  }
  if (display.value == "0") {
    display.value = "";
  }
  if(val!="." || !(display.value.includes("."))){
      display.value += val;
  }
  }

function operate(sign) {
  isOperateClick = true;
  if (operation == "") {
    operation = sign;
  }
  if (x != "") {
    switch (operation) {
      case "+":
        x = parseFloat(display.value) + parseFloat(x);
        break;
      case "-":
        x = parseFloat(x) - parseFloat(display.value);
        break;
      case "x":
        x = parseFloat(x) * parseFloat(display.value);
        break;
      case "÷":
        x = parseFloat(x) / parseFloat(display.value);
        break;
    }
  } else if (display.value != "") {
    x = display.value;
  }
  console.log(operation);
  console.log(x);
  operation = sign;
  display.value = x;
}

function calc() {
  operate(operation);
  operation = "";
  x = "";
}

function clr() {
  display.value = "";
  x = "";
  operation = "";
}