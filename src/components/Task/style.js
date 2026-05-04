import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  width: 100%;

  button {
    background-color: ${({ theme }) => theme.color.primary.light};
    color: ${({ theme }) => theme.color.primary.dark};
    border-radius: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.primary.main};
    cursor: pointer;
    display: table-cell;
    i {
      vertical-align: middle;
    }
  }

  .resto {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      justify-content: space-between;
      width: 100%;
      overflow: auto;
      border-radius: 10px;
      font-size: 20px;
      background-color: ${({ theme }) => theme.color.primary.light};
      color: ${({ theme }) => theme.color.secondary.dark};
      cursor: default;
      padding: 7px 10px 0 10px;
      border: 1px solid ${({ theme }) => theme.color.primary.main};

      ::-webkit-scrollbar {
        height: 0;
      }
    }
    span.checked {
      text-decoration-line: line-through;
      text-decoration-color: ${({ theme }) => theme.color.common.green};
    }
  }

  .but {
    display: flex;

    button {
      margin-left: 10px;
    }
  }

  .fixar {
    :hover {
      color: ${({ theme }) => theme.color.common.orange};
    }
  }
  .fixar.fixed {
    color: ${({ theme }) => theme.color.common.orange};
  }

  .excluir {
    :hover {
      color: ${({ theme }) => theme.color.common.red};
    }
  }
`;

export default Container;
