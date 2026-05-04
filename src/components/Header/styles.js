import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 20px auto;
  width: 50%;
  min-width: 300px;

  border: 1px solid ${({ theme }) => theme.color.primary.main};
  border-radius: 30px;

  h1 {
    color: ${({ theme }) => theme.color.secondary.main};
    font-weight: 500;
    cursor: default;
    margin: 0;
  }

  button {
    color: ${({ theme }) => theme.color.primary.main};
    border: none;
    background: none;
    margin: 0 2px 0 10px;
    justify-content: center;

    :hover {
      color: ${({ theme }) => theme.color.primary.dark};
    }

    i {
      vertical-align: middle;
      font-size: 30px;
      cursor: pointer;
    }
  }
`;

export { Container };
