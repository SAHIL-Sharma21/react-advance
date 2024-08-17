import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeContextType {
    theme: string;
    handleTheme: () => void;
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    if(!context) {
        throw new Error("useTheme is no working")
    }

    return  context;
}