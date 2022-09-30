import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.color["blue"]};
    }

    a{
        font-size: ${(props) => props.theme.text["link"]};
        text-decoration: none;
    }

    body{
        background: ${(props) => props.theme.color["base-background"]};
        color: ${(props) => props.theme.color["base-text"]};
        font-size: ${(props) => props.theme.text["text-medium"]};
    }

    body, input, textarea, button {
        font-family: "Nunito", sans-serif;
    }
`;
