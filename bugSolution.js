function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of 0,0 case
  } else if (b === 0) {
    throw new Error("Division by zero"); //Proper error handling
  } else if (a === 0) {
    return 0; //Handle a = 0
  } else {
    return a / b; //Correct computation
  }
}