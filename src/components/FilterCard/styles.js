import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${(props) => (!!props.actived ? "#f35a03" : "#474747")};
  padding: 20px;
  cursor: pointer;
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
