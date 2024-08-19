import styled from "styled-components";

export function Entries({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;
