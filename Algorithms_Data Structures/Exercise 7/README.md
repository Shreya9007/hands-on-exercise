# Financial Forecasting Analysis

## 1. Concept of Recursion
Recursion is a programming technique where a method calls itself to solve smaller sub-problems of the same problem. It simplifies code by breaking down a complex problem into a base case (where the problem is solved directly) and a recursive step (which reduces the problem size).

## 2. Complexity Analysis
- **Time Complexity**: \(O(T)\) where \(T\) is the number of years. For each year, we perform one multiplication and one subtraction, resulting in \(T\) recursive steps.
- **Space Complexity**: \(O(T)\) due to the call stack depth required to store intermediate stack frames.

## 3. Optimization Techniques
- **Stack Overflow Risk**: For large values of years (e.g., \(T = 10000\)), recursion will result in a `StackOverflowError` in Java.
- **Optimizations**:
  - **Iterative Approach**: An iterative loop calculates future values in \(O(1)\) auxiliary space, avoiding stack frames entirely.
  - **Memoization**: While not strictly needed for linear recursion, memoization is crucial for branching recursion (like Fibonacci) to avoid exponential time complexities.
