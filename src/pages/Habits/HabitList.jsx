import { DayHighlighter } from "components";
import styled from "styled-components";

export function HabitList({ habits }) {
    return habits.length === 0
        ? <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        : habits.map(obj => (
            <Entry key={obj.id}>
                {obj.name}
                <DayHighlighter highlights={obj.days} />
            </Entry>
        ));
}

const Text = styled.p`
    color: #666666;
    font-size: 18px;
    line-height: 22px;
`;

const Entry = styled.div`
    width: 100%;
    padding: 1em;
    background: white;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 0.5em;

    font-size: 20px;
    color: #666666;
`;
