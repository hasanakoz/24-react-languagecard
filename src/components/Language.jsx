import { Container, Image } from "react-bootstrap";

const Language = ({ lang }) => {
  const { name, img, options } = lang;
  return (
    <Container
      style={{ background: "peachpuff", padding: "2rem", height: "100%" }}
    >
      <Container
        style={{
          height: "100%",
          //   width: "120%",
        }}
      >
        <Image src={img} width="100%" height="80%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
    </Container>
  );
};

export default Language;
