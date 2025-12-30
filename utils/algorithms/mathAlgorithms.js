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

const primeNumber = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return console.log(`${n} is not Prime Number`);
  }
  console.log(`${n} is Prime Number`);
  // Big-O = O(n)
};

const powerOfTwo = (n) => {
  if (n < 1) return console.log(`${n} is not Power of Two`);
  let num = n;
  while (n > 1) {
    if (n % 2 !== 0) return console.log(`${n} is not Power of Two`);
    n = n / 2;
  }
  return console.log(`${num} is Power of Two`);
  // Big-O = O(logn)
};

const mathAlgorithms = {
  fibonacciSequence,
  factorial,
  primeNumber,
  powerOfTwo,
};

module.exports = { mathAlgorithms };
