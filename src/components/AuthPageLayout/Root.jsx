import styled from "styled-components";
import logo from "assets/logo.png"

export function Root({ children }) {
    return (
        <Wrapper>
            <img src={logo} alt="TrackIt" />
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 5em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`;
