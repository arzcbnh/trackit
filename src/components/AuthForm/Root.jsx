import styled from "styled-components";

export function Root({ children, ...rest }) {
    return <Form {...rest}>{children}</Form>;
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5em;
`;
