const { mathAlgorithms } = require("./utils/algorithms/mathAlgorithms");

const main = () => {
  console.time("Timer");
  // mathAlgorithms.fibonacciSequence(15);
  // mathAlgorithms.factorial(4);
  mathAlgorithms.primeNumber(5);
  console.timeEnd("Timer");
};

main();
