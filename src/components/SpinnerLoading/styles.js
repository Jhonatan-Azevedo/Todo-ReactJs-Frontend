import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 6px solid ${colors.secondary};
  border-top: 6px #f4f4f4 solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 1.3s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
