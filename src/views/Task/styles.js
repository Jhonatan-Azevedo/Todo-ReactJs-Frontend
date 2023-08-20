import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;

  #loading-message {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FieldLoading = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

  span {
    font-size: 24px;
    margin: 0 5px;
  }
`;

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .inative {
    opacity: 0.5;
  }

  button {
    border: none;
    background: none;
    outline: none;

    img {
      width: 55px;
      height: 55px;
      margin: 5px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
      }
    }

    &:disabled {
      img {
        cursor: default;
        opacity: 0.3;
        &:hover {
          opacity: 0.3;
        }
      }
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  span {
    color: ${colors.gray};
    margin: 5px 0;
  }

  input {
    font-size: 16px;
    padding: 15px 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.primary};

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type="date"]::-webkit-input-placeholder {
    visibility: hidden !important;
  }

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: calc(100% - 25px);
    top: -35px;
  }
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  span {
    color: ${colors.gray};
    margin: 5px 0;
  }

  textarea {
    font-size: 16px;
    padding: 15px 5px;
    outline: none;
    border: 1px solid ${colors.primary};
    border-radius: 5px;
    resize: none;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: ${colors.secondary};
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      &:hover {
        opacity: 0.5;
      }
      opacity: 0.5;
      cursor: default;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: ${colors.primary};
    font-weight: bold;

    label {
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    input {
      all: unset;
      width: 20px;
      height: 20px;
      border: 1px solid ${colors.primary} !important;
      border-radius: 5px;
      margin: 0 5px 0 0;
      display: inline-block;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    input:checked {
      background-color: ${colors.primary};
      width: 20px;
      height: 20px;
    }
  }
`;

export const Save = styled.div`
  width: 100%;

  button {
    width: 100%;
    background: ${colors.primary};
    border: none;
    font-size: 20px;
    color: ${colors.white};
    font-weight: bold;
    padding: 15px;
    margin: 30px 0 0 0;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
