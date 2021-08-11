import Mean from "../operations/Mean";
import Mode from "../operations/Mode";
import Median from "../operations/Median";
import StdDeviation from "../operations/StdDeviation";

function CalculateValues(data: number[]) {
  let values: number[] = [];
  values[0] = Mean(data);
  values[1] = Mode(data);
  values[2] = Median(data);
  values[3] = StdDeviation(data);
  return values;
}

export default CalculateValues;
