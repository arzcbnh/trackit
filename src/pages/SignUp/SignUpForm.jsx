import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthForm, Loading } from "components";
import { api } from "utils";

export function SignUpForm() {
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [email, emailProps] = AuthForm.useInputProps("email", "email", sending, "required");
    const [password, passwordProps] = AuthForm.useInputProps("senha", "password", sending, "required");
    const [name, nameProps] = AuthForm.useInputProps("nome", "text", sending, "required");
    const [image, imageProps] = AuthForm.useInputProps("imagem", "url", sending, "required");

    async function handleSubmit(event) {
        event.preventDefault();
        setSending(true);
        
        try {
            validate(email, password, name, image);
            await api.signUp({email, password, name, image});
            navigate("/");
        } catch (err) {
            alert(err.message);
        } finally {
            setSending(false);
        }
    }

    return (
        <AuthForm.Root onSubmit={handleSubmit}>
            <AuthForm.Input {...emailProps} />
            <AuthForm.Input {...passwordProps} />
            <AuthForm.Input {...nameProps} />
            <AuthForm.Input {...imageProps} />
            <AuthForm.Submit disabled={sending}>
                {sending ?
                    <Loading width="20px" height="20px" color="white" /> :
                    "Cadastrar"
                }
            </AuthForm.Submit>
        </AuthForm.Root>
    );
}

function validate(email, password, name, image) {
    const emptyField = email === "" || password === "" || name === "" || image === "";
    const invalidEmail = !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const invalidImage = !image.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (invalidImage) {
        throw new Error("Formato de URL da imagem inválido!");
    }

    if (invalidEmail) {
        throw new Error("Formato de email inválido!");
    }

    if (emptyField) {
        throw new Error("Campo de email, senha, nome, e/ou imagem vazios!");
    }
}
