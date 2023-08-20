import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 6px solid ${colors.secondary};
  border-top: 6px ${colors.white} solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 1.3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
