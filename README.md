# Subtle Division by Zero Bug in JavaScript

This repository demonstrates a subtle bug related to division by zero in a JavaScript function.

## Bug Description

The `foo` function attempts to divide `a` by `b`. However, it incorrectly handles the cases where either `a` or `b` is zero.  Instead of throwing an error or returning `Infinity` (as would be mathematically expected), it returns 1.

## Bug Solution

The solution addresses the division-by-zero issue by explicitly checking for zero values and throwing an error to clearly indicate the problem. This is a more robust approach than returning 1, which could mask the underlying mathematical error.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Execute the JavaScript files in a suitable environment (e.g., Node.js, browser console).
