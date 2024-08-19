import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Pages from "pages";
import { UserContextProvider } from "contexts/UserContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pages.Login />,
    },
    {
        path: "/cadastrar",
        element: <Pages.SignUp />,
    },
    {
        path: "/habitos",
        element: <Pages.Habits />,
    },
    {
        path: "/hoje",
        element: <Pages.Today />,
    },
]);

export function App() {
    return (
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    );
}
