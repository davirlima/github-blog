import styled from "styled-components";

export const ProfileContainer = styled.aside`
  width: 100%;
  min-height: 13.25rem;
  padding: 2rem 2.5rem;

  margin-top: -5.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background: ${(props) => props.theme.color["base-profile"]};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    position: absolute;
    top: 0;
    right: 0;

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

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme.color["base-title"]};
    font-size: ${(props) => props.theme.text["title-large"]};
  }
`;

export const UserInformation = styled.div`
  display: flex;
  gap: 1.5rem;

  h2 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: ${(props) => props.theme.text["text-medium"]};
    font-weight: 400;
  }
`;
