import { AuthPageLayout } from "components";
import { SignUpForm } from "./SignUpForm";

export function SignUp() {
    return (
        <AuthPageLayout.Root>
            <SignUpForm />
            <AuthPageLayout.Link to="/">Já tem uma conta? Faça login!</AuthPageLayout.Link>
        </AuthPageLayout.Root>
    );
}

