import { useState } from "react";
import styled from "styled-components";

import { Loading } from "components";
import { useUser } from "contexts/UserContext";
import { api } from "utils";

export function HabitForm({ hideForm, addHabit, $visible }) {
    const [user] = useUser();
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [sending, setSending] = useState(false);

    function toggleDay(event) {
        const day = Number(event.target.id);

        if (days.includes(day)) {
            setDays(days.filter(v => v !== day));
        } else {
            setDays([...days, day]);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSending(true);

        try {
            validate(name, days)
            const newHabit = await api.createHabit({ name, days }, user.token);
            addHabit(newHabit);
            event.target.reset();
            setName("");
            setDays([]);
            hideForm();
        } catch (err) {
            alert(err.message);
        } finally {
            setSending(false);
        }
    }

    return (
        <Form onSubmit={handleSubmit} $visible={$visible}>
            <Input type="text" placeholder="nome do hábito" onChange={e => setName(e.target.value)} disabled={sending} />
            <Fieldset>
                {/* IDs from 0 to 6 represent Sunday to Saturday respectively in the Driven API */}
                {/* I couldn't figure a way to elegantly use DayHighlighter instead */}
                {["D", "S", "T", "Q", "Q", "S", "S"].map((day, i) => (
                    <LabelCheckboxPair
                        $checked={days.includes(i)}
                        onChange={toggleDay}
                        text={day}
                        id={i}
                        key={i}
                        disabled={sending}
                    />
                ))}
            </Fieldset>
            <Actions>
                <Button type="button" $highlight={false} onClick={hideForm} disabled={sending}>Cancelar</Button>
                <Button $highlight={true} disabled={sending}>
                    {sending
                        ? <Loading width="20px" height="20px" color="white" />
                        : "Salvar"
                    }
                </Button>
            </Actions>
        </Form>
    )
}

function LabelCheckboxPair({ id, $checked, onChange, text }) {
    return (
        <>
            <Label htmlFor={id} $checked={$checked}>{text}</Label>
            <Input type="checkbox" id={id} onChange={onChange} />
        </>
    )
}

function validate(name, days) {
    if (days.length === 0) {
        throw new Error("Nenhum dia selecionado!");
    }

    if (name === "") {
        throw new Error("Campo de nome vazio!");
    }
}

const Form = styled.form`
    padding: 1em;
    background: white;
    border-radius: 5px;

    display: ${({ $visible }) => $visible ? "flex" : "none"};
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size: 20px;

    &:placeholder-shown {
        color: #dbdbdb;
    }

    &[type="checkbox"] {
        display: none;
    }
`;

const Fieldset = styled.fieldset`
    display: flex;
    gap: 5px;
`;

const Label = styled.label`
    width: 1.5em;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    border: 1px solid #d4d4d4;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    background: ${({ $checked }) => $checked ? "#cfcfcf" : "transparent"};
    color: ${({ $checked }) => $checked ? "white" : "#dbdbdb"};
`;

const Actions = styled.div`
    margin-top: 1em;
    display: flex;
    gap: 10px;
    align-self: end;
`;

const Button = styled.button`
    padding: 0.7em 1.2em;
    border: none;
    border-radius: 5px;
    font-size: 16px;

    background: ${({ $highlight }) => $highlight ? "#52b6ff" : "white"};
    color: ${({ $highlight }) => $highlight ? "white" : "#52b6ff"};

    ${({ $highlight }) => $highlight ? "&:disabled { background: #86cdff; }" : ""}
`;
