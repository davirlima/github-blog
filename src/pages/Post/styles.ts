import styled from "styled-components";

export const PostContentContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    font-size: ${(props) => props.theme.text["text-medium"]};
    color: ${(props) => props.theme.color["blue"]};

    &:hover {
      transition: opacity, 0.2s;
      opacity: 0.6;
    }
  }
`;
