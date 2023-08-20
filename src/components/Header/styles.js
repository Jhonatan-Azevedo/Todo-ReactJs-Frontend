import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${colors.secondary};
  border-bottom: 6px solid ${colors.primary};
  display: flex;

  img {
    width: 110px;
    height: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 140px;
  }
`;

export const LeftSide = styled.div`
  width: 30%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 70%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all ease 2s;

  a,
  button,
  #exit-btn {
    font-size: 16px;
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: ${colors.primary};
    }
  }

  #notification {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 25px;
      height: 30px;
    }

    span {
      background-color: #fff;
      color: ${colors.primary};
      padding: 1px 5px;
      border-radius: 50%;
      position: relative;
      top: -18px;
      right: 14px;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  .divider::after {
    content: "|";
    margin: 0 10px;
    color: ${colors.white};
  }

  #exit-btn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    a,
    button,
    #exit-btn {
      font-size: 12px;
    }
  }
`;
