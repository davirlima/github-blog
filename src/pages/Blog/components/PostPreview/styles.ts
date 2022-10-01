import styled from "styled-components";

export const PostsPreviewContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${(props) => props.theme.color["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;

  cursor: pointer;

  overflow: hidden;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    overflow: hidden;
    text-overflow: ellipsis;

    h1 {
      font-size: ${(props) => props.theme.text["title-medium"]};
      color: ${(props) => props.theme.color["base-title"]};
      max-width: 17.6875rem;
    }
    span {
      font-size: ${(props) => props.theme.text["text-short"]};
      color: ${(props) => props.theme.color["base-span"]};
      text-align: right;
    }
  }

  p {
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    transition: border-color 0.2s;
    border: 2px solid ${(props) => props.theme.color["base-label"]};
  }

  @media screen and (max-width: calc(416px + 2rem)) {
    width: 100%;
    text-align: center;

    header {
      flex-direction: column;
      align-items: center;
    }
  }
`;
