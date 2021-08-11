import { Container, Col, Row } from "react-bootstrap";
import classes from "./MainComponent.module.css";
import { useState } from "react";
import Circle from "./Circle";
import CalculateValues from "../operations/CalculateValues";

function InputOptions() {
  const [s1, setS1] = useState<number | string>("Answer");
  const [s2, setS2] = useState<number | string>("Answer");
  const [s3, setS3] = useState<number | string>("Answer");
  const [s4, setS4] = useState<number | string>("Answer");
  const [s5, setS5] = useState("");

  function fileReader(file: File) {
    let fr = new FileReader();
    fr.readAsText(file);
    fr.onload = (e) => {
      let result: any = fr.result;
      result = JSON.parse(result);
      const values = CalculateValues(result.data);
      setStates(values);
    };
  }

  async function getProducts(url: string) {
    let response = await fetch(url);
    const result = await response.json();
    const values = CalculateValues(result.data);
    setStates(values);
  }

  function setStates(values: number[]) {
    setS1(values[0].toPrecision(3));
    setS2(values[1]);
    setS3(values[2]);
    setS4(values[3].toPrecision(3));
  }
  return (
    <Container>
      <Row>
        <Circle text="Mean" ans={s1} />
        <Circle text="Mode" ans={s2} />
        <Circle text="Median" ans={s3} />
        <Circle text="Standard Deviation" ans={s4} />
      </Row>
      <Row>
        <Col className={classes.input1}>
          <label className={classes.btn}>
            Enter file
            <input
              type="file"
              onChange={(e) => fileReader(e.target.files![0])}
            />
          </label>
        </Col>
        <Col className={classes.input2}>
          <input type="url" onChange={(e) => setS5(e.target.value)} />
          <button className={classes.btn} onClick={() => getProducts(s5)}>
            Fetch
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default InputOptions;

//Link for testing the fetch: https://api.jsonbin.io/b/60cd063f8ea8ec25bd107032
