import React, { createContext, useState, useContext } from "react";

// 1. create a new context
const ThemeContext = createContext();

// 2. Set-up your Provider component
export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    function toggleTheme(){
        setTheme((prevTheme)=> (prevTheme==='light'? 'dark' : 'light'))
    }

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3. custom hook to Consume ThemeContext
export function useTheme() {
    return useContext(ThemeContext);
}
