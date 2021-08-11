import Mean from "./Mean";

//IMPLEMETING THE S.D FUNCTIONALITY
// S.D = (mean of the squared values -s qaure of the mean)^1/2
function StdDeviation(inputData: number[]) {
  const arr = inputData;
  const length = arr.length;

  const squared_arr = [];
  let sum = 0;
  for (let i = 0; i < length; i++) {
    squared_arr[i] = arr[i] ** 2;
    sum = sum + squared_arr[i];
  }

  const mean_of_squared = sum / length;
  let mean = Mean(inputData);
  const StandardDeviation = (mean_of_squared - mean ** 2) ** (1 / 2);
  return StandardDeviation;
}

export default StdDeviation;
