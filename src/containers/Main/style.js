import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  footer {
    cursor: default;
    color: ${({ theme }) => theme.color.secondary.main};
    bottom: 0;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.secondary.main};
    }

    button {
      background-color: transparent;
      border: none;

      i {
        font-size: 1.5rem;
        vertical-align: middle;
        color: ${({ theme }) => theme.color.secondary.main};
        cursor: pointer;
        transition: all ease 0.2s;

        :hover {
          color: ${({ theme }) => theme.color.secondary.dark};
        }
      }
    }
  }

  .board {
    height: 100%;
    width: 100%;
    margin: 20px 0 20px 0;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: none;
      border-radius: 10px;
      box-shadow: inset 0px 0px 8px ${({ theme }) => theme.color.primary.dark};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.color.secondary.main};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.color.secondary.dark};
    }
  }
`;

export { Container };
