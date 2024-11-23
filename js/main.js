function convert() {
  var dollar = document.getElementById("dollar").value;
  var result = document.getElementById("result");
  if (dollar == "") {
    result.value = "enter a number";
  } else if (isNaN(dollar)) {
    result.value = "Enter Number";
  } else if (dollar == 0) {
    result.value = "Enter Number than zero";
  } else if (dollar < 0) {
    result.value = "enter positive number";
  } else {
    result.value = dollar * 50;
  }
  return false;
}
