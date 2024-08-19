import styled from "styled-components";
import { BottomBar } from "./BottomBar";
import { Main } from "./Main";
import { TopBar } from "./TopBar";

export function Root({ children }) {
    return (
        <Wrapper>
            <TopBar />
            <Main>
                {children}
            </Main>
            <BottomBar />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    flex: 1;
`
