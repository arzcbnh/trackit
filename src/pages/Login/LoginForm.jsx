import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthForm, Loading } from "components";
import { useUser } from "contexts/UserContext";
import { api } from "utils";

export function LoginForm() {
    const [user, setUser] = useUser();
    const [sending, setSending] = useState(false);
    const [email, emailProps] = AuthForm.useInputProps("email", "email", sending, "required");
    const [password, passwordProps] = AuthForm.useInputProps("senha", "password", sending, "required");
    const navigate = useNavigate();

    useEffect(() => {
        if (user.token != null) {
            navigate("/habitos");
        }
    }, [user]);

    async function handleSubmit(event) {
        event.preventDefault();
        setSending(true);

        try {
            validate(email, password);
            const data = await api.login({email, password});
            setUser(data);
        } catch(err) {
            alert(err.message);
        } finally {
            setSending(false);
        }
    }

    return (
        <AuthForm.Root onSubmit={handleSubmit}>
            <AuthForm.Input {...emailProps} />
            <AuthForm.Input {...passwordProps} />
            <AuthForm.Submit disabled={sending}>
                {sending ?
                    <Loading width="20px" height="20px" color="white" /> :
                    "Entrar"
                }
            </AuthForm.Submit>
        </AuthForm.Root>
    );
}

function validate(email, password) {
    const emptyField = email === "" || password === "";
    const invalidEmail = !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (emptyField) {
        throw new Error("Campo de email e/ou senha vazios!");
    }

    if (invalidEmail) {
        throw new Error("Formato de email inválido!");
    }
}
