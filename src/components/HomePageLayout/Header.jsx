import styled from "styled-components";

export function Header({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 23px;
    color: #126ba5;
`;


