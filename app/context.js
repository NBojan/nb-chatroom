"use client"
import { useContext, createContext, useEffect, useState } from "react"

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [activeRoom, setActiveRoom] = useState("general");
    const [appStart, setAppStart] = useState(false);

    useEffect(() => {
        if(!appStart) {
            setUser(localStorage.getItem("user") || "MilanFan");
            setAppStart(true);
            return
        }
        localStorage.setItem("user", user);
    }, [user]);
    
    return (
        <AppContext.Provider value={{user, setUser, activeRoom, setActiveRoom}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);