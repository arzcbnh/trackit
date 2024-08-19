import { AuthPageLayout } from "components";
import { LoginForm } from "./LoginForm";

export function Login() {
    return (
        <AuthPageLayout.Root>
            <LoginForm />
            <AuthPageLayout.Link to="/cadastrar">Não tem uma conta? Cadastre-se!</AuthPageLayout.Link>
        </AuthPageLayout.Root>
    );
}
