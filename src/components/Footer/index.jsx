import * as S from "./styles";
import iconLinkedin from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <S.Container>
      <span>Todo - Organizando seu vida -</span>
      <a href="https://www.linkedin.com/in/jazevedodev/" target="_blank">
        <span>Jhonatan Azevedo</span>
        <img src={iconLinkedin} alt="Linkedin" />
      </a>
    </S.Container>
  );
};

export default Footer;
