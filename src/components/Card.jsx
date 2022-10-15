import Container from "react-bootstrap/Container";
import Language from "./Language";

const Card = () => {
  return (
    <Container className="bg-secondary rounded-3">
      <h1>Programming Languages</h1>
      <Language />
    </Container>
  );
};

export default Card;
