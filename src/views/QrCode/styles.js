import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${colors.primary};
    margin: 40px 0 0 0;
  }

  p {
    color: ${colors.secondary};
  }
`;

export const QrCodeArea = styled.div`
  width: 100%;
  margin: 15px 5px;
  display: flex;
  justify-content: center;
`;

export const ValidationCODE = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    font-size: 18px;
    padding: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.primary};
    text-align: center;
  }

  button {
    font-weight: bold;
    background-color: ${colors.primary};
    color: #fff;
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: ${colors.secondary};
    }

    &:disabled {
      background-color: ${colors.primary};
      opacity: 0.7;
      cursor: default;
    }
  }
`;
