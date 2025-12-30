const fibonacciSequence = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (arr.length === 0 || arr.length === 1) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }

  console.log("FibonacciSequence is: ", arr);
  // Big-O = O(n)
};

const factorial = (n) => {
  let factorial = n;
  for (let i = n; i > 0; i--) {
    if (i > 1) factorial *= i - 1;
  }
  console.log(`Factorial of ${n} is: ${factorial}`);
  // Big-O = O(n)
};

const primeNumber = (n) => {};

const mathAlgorithms = {
  fibonacciSequence,
  factorial,
  primeNumber,
};

module.exports = { mathAlgorithms };
