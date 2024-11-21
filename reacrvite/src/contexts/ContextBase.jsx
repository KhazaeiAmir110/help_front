import {createContext} from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
    return (
        <Context.Provider value={{color:"red"}}>
            {children}
        </Context.Provider>
    )
}