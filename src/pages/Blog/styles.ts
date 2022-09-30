import styled from "styled-components";

export const BlogContainer = styled.section`
  width: 100%;
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const PostsPreviewContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 864px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;
