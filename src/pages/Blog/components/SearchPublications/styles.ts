import styled from "styled-components";

export const SearchPublicationsContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${(props) => props.theme.text["title-short"]};
      color: ${(props) => props.theme.color["base-subtitle"]};
    }

    span {
      font-size: ${(props) => props.theme.text["text-short"]};
      color: ${(props) => props.theme.color["base-span"]};
    }
  }

  form {
    width: 100%;

    input {
      width: 100%;
      padding: 0.75rem;

      background: ${(props) => props.theme.color["base-input"]};
      border: 1px solid ${(props) => props.theme.color["base-border"]};
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme.color["base-label"]};
      }
    }
  }
`;
