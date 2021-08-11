import classes from "./Circle.module.css";
import { Col } from "react-bootstrap";

function Circle(props: any) {
  return (
    <Col>
      <div>
        <div className={classes.circle}>
          <div className={classes.answer}>{props.ans}</div>
        </div>
        <h2>{props.text}</h2>
      </div>
    </Col>
  );
}
export default Circle;
