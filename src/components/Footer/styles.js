import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: ${colors.secondary};
  border-top: 6px solid ${colors.primary};

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;

  span {
    color: ${colors.white};
  }

  a {
    text-decoration: none;
    font-weight: bold;
    margin: 0 5px;
    display: flex;

    &:hover {
      opacity: 0.5;
    }

    span {
      color: ${colors.primary};
    }

    img {
      width: 20px;
      margin: 0 5px;
    }
  }
`;
