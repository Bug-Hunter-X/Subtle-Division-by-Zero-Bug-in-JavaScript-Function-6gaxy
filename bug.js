function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of 0,0 case
  } else if (a === 0 || b === 0) {
    return 1; // Incorrect: should throw an error or return Infinity
  } else {
    return a / b; //Correct computation
  }
}