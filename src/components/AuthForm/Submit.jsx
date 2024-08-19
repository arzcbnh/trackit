import styled from "styled-components";

export function Submit({ children, ...rest }) {
    return <Button {...rest}>{children}</Button>;
}

const Button = styled.button`
    background: #52b6ff;
    min-height: 45px;
    padding: 0.4em;
    border-radius: 5px;
    border: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 20px;

    &:disabled {
        background: #86cdff;
    }
`;
