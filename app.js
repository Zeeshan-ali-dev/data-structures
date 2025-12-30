const { mathAlgorithms } = require("./utils/algorithms/mathAlgorithms");
const { searchAlgorightms } = require("./utils/algorithms/searchAlgorithms");

const main = () => {
  console.time("Timer");
  // searchAlgorightms.linearSearch();
  searchAlgorightms.binarySearch();
  console.timeEnd("Timer");
};

main();
