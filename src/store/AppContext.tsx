'use client'

import { useState, createContext } from "react";

interface AppContextProps {
    children: React.ReactNode
}


export const AppContext = createContext({
    theme: 'light',
    changeTheme: (theme: string) => { }
});

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [theme, setTheme] = useState<string>('light');

    const context = {
        theme: theme,
        changeTheme: (theme: string) => setTheme(theme),
    };

    return (
        <AppContext.Provider value={context} >
            {children}
        </AppContext.Provider>
    )
}