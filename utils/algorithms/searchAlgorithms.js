const linearSearch = (n = 20) => {
  const arr = [-5, 2, 10, 4, 6];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return console.log(i);
  }
  return console.log(-1);
  // Big-O = O(n)
};

const binarySearch = (n = 10) => {
  let arr = [2, 4, 6, 10, 14, 25];
  let leftIndex = 0;
  let rightIndex = arr.length;
  let midIndex = arr.length / 2;
  if (arr.length == 0) return console.log(-1);
  if (arr[midIndex] === n) return console.log(arr[midIndex]);
    
  return console.log(-1);
  // Big-O =
};

const searchAlgorightms = {
  linearSearch,
  binarySearch,
};

module.exports = {
  searchAlgorightms,
};
