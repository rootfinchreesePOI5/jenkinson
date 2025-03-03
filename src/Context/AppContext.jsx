import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const money = '$'
    const value = {
        money
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
