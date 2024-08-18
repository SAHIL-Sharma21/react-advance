import {createContext, ReactNode, useState} from 'react'

interface AuthContextType{
    loggedInUser: string | null;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
    handleLogout: () => void;
}

interface AuthContextProviderProps {
    children: ReactNode;
}


export const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({children}:AuthContextProviderProps) => {

    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement
        const formData = new FormData(form);
        const username = formData.get('username');

        if(!username) {
            throw new Error('Username is required');
        }

        localStorage.setItem('username', username as string);
        setLoggedInUser(username as string);
        form.reset();
    }


    const handleLogout = () => {
        localStorage.removeItem('username');
        setLoggedInUser(null);
    }

    return (
        <AuthContext.Provider value={{loggedInUser, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
