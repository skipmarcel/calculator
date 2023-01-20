
  
  function add(number1, number2) {
    // return (parseInt(number1)) + (parseInt(number2)); <-- this worked, but I simplified on line 5
    return (+number1) + (+number2);
  }

  function subtract(number1, number2) {
    return number1 - number2;
  }

  function multiply(number1, number2) {
    return number1 * number2;
  }

  function divide(number1, number2) {
    return number1 / number2;
  }

  const number1 = prompt("Enter your first number:");
  const number2 = prompt("Now your second number:");


window.alert
(
"Your addition sum is:" + "  " + (number1) + " " + "+" + " " + (number2) + " " + "=" + "  " + add(number1, number2) + "\n"
+ "Your subtraction sum is:" + "  " + (number1) + " " + "-" + " " + (number2) + " " + "=" + "  " + subtract(number1, number2) + "\n" 
+ "Your multiplication sum is:" + " " + multiply(number1, number2) + "\n"
+ "Your division sm is:" + " " + divide(number1, number2)
);