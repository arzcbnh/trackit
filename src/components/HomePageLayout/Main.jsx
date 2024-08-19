import styled from "styled-components";

export function Main({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
    padding: 1.5em 1em;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25em;

    svg {
        margin: auto;
    }
`;
