import styled from "styled-components";

const Container = styled.div`
  display: flex;

  input {
    font-family: "Roboto Condensed", sans-serif;
    padding: 10px 20px 10px 10px;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.color.primary.main};
    margin-right: 10px;
    outline: none;
    font-size: 15px;
    background-color: ${({ theme }) => theme.color.inputField};
    color: ${({ theme }) => theme.color.secondary.dark};
    width: 100%;

    ::placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.color.primary.dark};
    }
  }

  button {
    background-color: ${({ theme }) => theme.color.secondary.dark};
    border: none;
    border-radius: 30px;
    cursor: pointer;
    width: 105px;
    min-width: 90px;

    i {
      font-size: 2rem;
      vertical-align: middle;
      color: ${({ theme }) => theme.color.common.green};
    }
  }
`;

export { Container };
