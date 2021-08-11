//IMPLEMETING THE MODE FUNCTIONALITY
function Mode(inputData: number[]) {
  const arr = inputData;
  const length = arr.length;

  let mode = 0;
  let count = 1;
  let value = 0,
    prev_val = 0;
  let prev_count = 0;
  let sorted = arr.sort();

  for (let i = 0; i < length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      count++;
      value = sorted[i];
    } else {
      if (count > prev_count) {
        prev_count = count;
        prev_val = value;
      }
      count = 1;
    }
  }
  count > prev_count ? (mode = value) : (mode = prev_val);

  return mode;
}

export default Mode;
