import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    token: null,
    user: null,
    setToken: () => {},
    setUser: () => {}
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const setToken = (token) => {
        _setToken(token)
        if(token) {
            localStorage.set('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    
    return (
        <AppContext.Provider value={{
            user,
            token,
            setToken,
            setUser
        }} >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)