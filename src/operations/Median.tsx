//IMPLEMENTING MEDIAN FUNCTIONALITY
function Median(inputData: number[]) {
  const arr = inputData;
  const length = arr.length;

  let median = 0;
  let sorted = arr.sort();

  // For even number of values, median is the avg. of the middle two numbers
  // For odd, median is the middle value exactly
  if (length % 2 === 0) {
    let p = sorted[length / 2];
    let q = sorted[length / 2 - 1];
    median = (p + q) / 2;
  } else {
    median = sorted[(length - 1) / 2];
  }
  return median;
}

export default Median;
