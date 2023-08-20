import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled(({ isActived, ...rest }) => (
  <section {...rest} />
))`
  width: 100%;
  height: 70px;
  background: ${({ isActived }) =>
    isActived ? colors.primary : colors.secondary};
  padding: 20px;
  box-sizing: border-box;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 30px;
  }

  span {
    color: #f4f4f4;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background-color: #f35a03;
  }
`;
