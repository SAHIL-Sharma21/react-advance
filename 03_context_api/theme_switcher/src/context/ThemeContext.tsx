import {createContext, useState} from 'react'

interface Value {
    theme: string;
    handleTheme: () => void;
}

export const ThemeContext = createContext<Value | null>(null);

const ThemeProvider = ({children}: {children: JSX.Element}) => {

    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return(
       <ThemeContext.Provider value={{theme, handleTheme}}>
        {children}
       </ThemeContext.Provider>
    );
}

export default ThemeProvider;