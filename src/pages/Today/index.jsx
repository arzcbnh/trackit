import { useEffect, useState } from "react";
import { HomePageLayout, Loading } from "components";
import { TaskList } from "./TaskList";
import { useUser } from "contexts/UserContext";
import { api } from "utils";

const weekdayNames = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "sábado",
];

function padWithZero(num) {
    return ("00" + num).slice(-2);
}

export function Today() {
    const [tasks, setTasks] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [user] = useUser();

    const today = new Date();
    const weekday = weekdayNames[today.getDay()];
    const date = padWithZero(today.getDate());
    const month = padWithZero(today.getMonth() + 1);

    useEffect(() => {
        (async () => {
            setFetching(true);

            try {
                const tasks = await api.getTodayHabits(user.token);
                setTasks(tasks);
            } catch (err) {
                alert(err);
            } finally {
                setFetching(false);
            }
        })();
    }, []);

    return (
        <HomePageLayout.Root>
            {fetching
                ? <Loading width="40px" height="40px" color="#126ba5" />
                : <>
                    <HomePageLayout.Header>
                        {weekday}, {date}/{month}
                    </HomePageLayout.Header>
                    <HomePageLayout.Entries>
                        <TaskList tasks={tasks} />
                    </HomePageLayout.Entries>
                </>
            }
        </HomePageLayout.Root>
    )
}
