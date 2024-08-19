import styled from "styled-components";

export function ShowFormButton(props) {
    return (
        <Button {...props}>
            <CenterLowerCase>+</CenterLowerCase>
        </Button>
    );
}

const Button = styled.button`
    padding: 0.15em 0.45em;
    background: #52b6ff;
    border-radius: 5px;
    border: unset;

    font-size: 27px;
    color: white;

    &:disabled {
        background: #86cdff;
    }
`;

const CenterLowerCase = styled.span`
    display: inline-block;
    transform: translateY(calc(((-1em / 1.5) + 1ex) / 2));
`;
