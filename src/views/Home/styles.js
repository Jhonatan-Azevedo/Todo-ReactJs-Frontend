import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  margin-bottom: 60px;
  overflow: hidden;
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

    flex-grow: 1;
    flex-basis: 250px;
    margin: 10px;
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
    color: #474747;
  }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #474747;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3 {
    color: #474747;
    position: relative;
    top: 10px !important;
    background-color: #fff;
    padding: 0 20px;
  }
`;
