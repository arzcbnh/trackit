import { useEffect, useState } from "react";
import { HomePageLayout, Loading } from "components";
import { ShowFormButton } from "./ShowFormButton";
import { HabitForm } from "./HabitForm";
import { HabitList } from "./HabitList";
import { useUser } from "contexts/UserContext";
import { api } from "utils";

export function Habits() {
    const [habits, setHabits] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [showingForm, setShowingForm] = useState(false);
    const [user] = useUser();

    useEffect(() => {
        (async () => {
            setFetching(true);

            try {
                const habits = await api.getAllHabits(user.token);
                setHabits(habits);
            } catch (err) {
                alert(err.message);
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
                        Meus hábitos
                        <ShowFormButton onClick={() => setShowingForm(true)} />
                    </HomePageLayout.Header>
                    <HabitForm $visible={showingForm} hideForm={() => setShowingForm(false)} addHabit={habit => setHabits([...habits, habit])} />
                    <HomePageLayout.Entries>
                        <HabitList habits={habits} />
                    </HomePageLayout.Entries>
                </>
            }
        </HomePageLayout.Root>
    )
}
