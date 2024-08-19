import styled from "styled-components";

export function Input(props) {
    return <StyledInput {...props} />;
}

const StyledInput = styled.input`
    min-width: 100%;
    min-height: 45px;
    padding: 0.4em;
    border-radius: 5px;
    border: 1px solid #d4d4d4;

    font-size: 20px;

    &:placeholder-shown {
        color: #dbdbdb;
    }
`;
