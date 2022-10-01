import styled from "styled-components";

export const PostInformationContainer = styled.aside`
  width: 100%;
  min-height: 10.5rem;
  padding: 2rem 2.5rem;

  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  background: ${(props) => props.theme.color["base-profile"]};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 659px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme.color["blue"]};
    border-bottom: 1px solid transparent;

    &:hover {
      transition: border-color 0.2s;
      border-bottom: 1px solid ${(props) => props.theme.color["blue"]};
    }
  }
`;

export const PostInformationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme.color["base-title"]};
  }
`;

export const PostDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  h2 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: ${(props) => props.theme.text["text-medium"]};
    color: ${(props) => props.theme.color["base-span"]};
    font-weight: 400;
  }

  @media screen and (max-width: 659px) {
    justify-content: center;
  }
`;
