import { Container, Image } from "react-bootstrap";
import { useState } from "react";

const Language = ({ lang }) => {
  const { name, img, options } = lang;
  const [showDesk, setShowDesk] = useState(false);
  console.log(showDesk);
  return (
    <Container
      className="h-100"
      style={{ background: "peachpuff", padding: "2rem" }}
      onClick={() => setShowDesk(!showDesk)}
      type="button"
    >
      {!showDesk && (
        <Container
          style={{
            height: "100%",
            //   width: "120%",
          }}
        >
          <Image src={img} width="100%" height="80%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}

      {showDesk && (
        <ul className="h-100">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
