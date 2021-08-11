// IMPLEMENTING MEAN FUNCTIONALITY
function Mean(inputData: number[]) {
  const arr = inputData;
  const length = arr.length;

  const total = arr.reduce((acc: number, val: number) => acc + val);
  const mean = total / length;
  return mean;
}

export default Mean;
