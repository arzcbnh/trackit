import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

function UserContextProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) ?? {});

    function setUserWrapper(value) {
        localStorage.setItem("user", JSON.stringify(value));
        setUser(value);
    }

    return <UserContext.Provider value={[ user, setUserWrapper ]}>{children}</UserContext.Provider>;
}

function useUser() {
    const context = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (context == null) {
            throw new Error("useUser must be used within a UserContextProvider");
        }
    
        const userIsLoggedIn = Object.keys(context[0]).length > 0;
        if (!userIsLoggedIn) {
            navigate("/");
        }
    }, [context]);

    return context;
}

export { UserContextProvider, useUser };
