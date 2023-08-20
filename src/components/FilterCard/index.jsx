import filter from "../../assets/filter.png";
import * as S from "./styles";

const FilterCard = ({ title, actived }) => {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="Filtro" />
      <span>{title}</span>
    </S.Container>
  );
};

export default FilterCard;
