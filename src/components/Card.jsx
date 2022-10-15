import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container className="bg-secondary rounded-3 mt-4 p-3">
      <h1 className="text-warning my-3">Programming Languages</h1>
      <Row className="g-3 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language lang={lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
