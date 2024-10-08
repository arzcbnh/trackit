import { useState } from "react";
import styled from "styled-components";

import { useUser } from "contexts/UserContext";
import { api } from "utils";

export function TaskList({ tasks }) {
    const [sending, setSending] = useState(false);
    const [user] = useUser();

    async function toggleTask(task) {
        setSending(true);

        try {
            if (task.done) {
                await api.uncheckHabit(task.id, user.token);
            } else {
                await api.checkHabit(task.id, user.token);
            }
        } catch (err) {
            alert(err.message);
        } finally {
            // TODO: button doesn't change color after un/checking
            setSending(false);
            task.done = !task.done;
            task.currentSequence += task.done ? 1 : -1;
            task.highestSequence += task.done ? 1 : -1;
        }
    }

    return tasks.length === 0
        ? <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        : tasks.map(item => (
            <Task key={item.id}>
                <Info>
                    <Name>{item.name}</Name>
                    <Records>
                        Sequência atual: {item.currentSequence} dia{item.currentSequence > 1 ? "s" : ""} <br />
                        Seu recorde: {item.highestSequence} dia{item.highestSequence > 1 ? "s" : ""}
                    </Records>
                </Info>
                <Button $checked={item.done} onClick={() => toggleTask(item)} disabled={sending}>
                    <CheckmarkIcon />
                </Button>
            </Task>
        ));
}

function CheckmarkIcon() {
    return (
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white" />
        </svg>
    );
}

const Text = styled.p`
    color: #666666;
    font-size: 18px;
    line-height: 22px;
`;

const Task = styled.div`
    width: 100%;
    padding: 1em;
    background: white;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    margin-bottom: 0.5em;
    font-size: 20px;
    color: #666666;
`

const Records = styled.div`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`;

const Button = styled.button`
    aspect-ratio: 1 / 1;
    background: ${({ $checked }) => $checked ? "#8fc549" : "#ebebeb"};
    border: ${({ $checked }) => $checked ? "unset" : "1px solid #e7e7e7"};
    border-radius: 5px;

    svg {
        width: 2rem;
    }
`;
