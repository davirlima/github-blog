import styled from "styled-components";

export const SpinnerContainer = styled.span`
  width: 100%;
  display: block;
  background-color: red;
  position: relative;

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
