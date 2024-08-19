import styled from "styled-components";

export function DayHighlighter({ highlights = [] }) {
    return (
        <Wrapper>
            {/* IDs from 0 to 6 represent Sunday to Saturday respectively in the Driven API */}
            <Day $checked={highlights.includes(0)}>D</Day>
            <Day $checked={highlights.includes(1)}>S</Day>
            <Day $checked={highlights.includes(2)}>T</Day>
            <Day $checked={highlights.includes(3)}>Q</Day>
            <Day $checked={highlights.includes(4)}>Q</Day>
            <Day $checked={highlights.includes(5)}>S</Day>
            <Day $checked={highlights.includes(6)}>S</Day>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
`

const Day = styled.div`
    width: 1.5em;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    border: 1px solid #d4d4d4;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    user-select: none;

    background: ${({ $checked }) => $checked ? "#cfcfcf" : "transparent"};
    color: ${({ $checked }) => $checked ? "white" : "#dbdbdb"};
`;
