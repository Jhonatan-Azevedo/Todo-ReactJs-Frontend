import styled from "styled-components";

// export const Container = styled.section`
//   width: 350px;
//   height: 200px;
//   box-shadow: -3px 1px 13px 2px rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   cursor: pointer;
//   margin: 20px;
//   padding: 10px;
//   box-sizing: border-box;
//   text-align: center;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   opacity: ${({ doneValue }) => (doneValue ? 0.5 : 1)};

//   &:hover {
//     opacity: 0.5;
//   }

//   .concluded {
//     opacity: 0.5;
//   }
// `;

export const Container = styled(({ done, ...rest }) => <section {...rest} />)`
  width: 350px;
  height: 200px;
  box-shadow: -3px 1px 13px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  opacity: ${({ done }) => (done ? 0.5 : 1)};

  &:hover {
    opacity: 0.5;
  }

  .concluded {
    opacity: 0.5;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    overflow-wrap: break-word;
  }

  img {
    margin-bottom: 5px;
  }
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  strong {
    color: #f35a03;
  }

  span {
    color: #707070;
  }
`;
