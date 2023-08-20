import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  margin-bottom: 60px;
  overflow: hidden;
  text-align: center;

  #loading-message {
    font-size: 20px;
  }
`;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  button {
    width: 260px;
    border: none;
    background: none;
    outline: none;
    margin: 5px 10px;

    cursor: pointer;

    flex-grow: 1;
    flex-basis: 250px;
    margin: 10px;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${colors.secondary};
  }

  h3 {
    font-weight: normal;
    margin-top: 20px;
  }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.secondary};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3 {
    color: ${colors.secondary};
    position: relative;
    top: 10px !important;
    background-color: #fff;
    padding: 0 20px;
  }
`;

export const FieldLoading = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

  span {
    font-size: 24px;
    margin: 0 5px;
  }
`;
