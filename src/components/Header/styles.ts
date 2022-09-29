import styled from "styled-components";
import headerEffect from "../../assets/headerEffect.png";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 18.5rem;
  background: url(${headerEffect}) center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 2.875rem;
  }
`;
