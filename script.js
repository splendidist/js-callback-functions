function notifyUser() {
  console.log("notifyUser function was called!");
}

function myCallbackFunction(notifyUserCallback) {
  console.log("Running myCallbackFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

myCallbackFunction(notifyUser); //this function calls the function notifyUser

//Pass an anonymous function as a callback

function myCallbackFunction(onCompleteCallback) {
  console.log("Running myCallbackFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myCallbackFunction(function () {
  console.log("notifyUser function was called!");
});

//can also be written as and arrow function

myCallbackFunction(() => {
  console.log("notifyUser function was called!");
});

//Pass more than one function in - one to run on success, one to run on failure
//comment out above to view this function

function myCallbackFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myCallbackFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  const success = Math.random() > 0.5; // randomly choose if success is true or false
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

myCallbackFunction(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);

//can also be written as

function onCallbackSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onCallbackFailure() {
  console.log("It failed :(");
}

myCallbackFunction(onCallbackSuccess, onCallbackFailure);

//comment out code above to view this mathematical function

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function compare(result3, result4) {
  return result3 < result4;
}

//

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); //Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); //Output: 6

const result3 = myCalculatorFunction(4, 5, subtract);
console.log(result3); //Output: -1

const result4 = myCalculatorFunction(10, 2, divide);
console.log(result4); //Output: 5

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); //Output: 9

const compareResult = myCalculatorFunction(result3, result4, compare);
console.log("-1 < 5 =", compareResult); //Output: -1 < 5 = true

//button callback functions

const button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  console.log("click"); //logs click to console when button is clicked
});

button.addEventListener("click", function (changeBGC) {
  document.body.style.backgroundColor = "pink"; //changes background colour to pink when button is clicked
});
