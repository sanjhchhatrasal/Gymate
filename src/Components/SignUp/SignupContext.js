import { createContext } from "react";
import { useContext } from "react";

export const NameContext = createContext({
    items: [
        {
            id: 1,
            name: "name of user",
        }
    ],
    
    addItem : (name) => {},
    updatedName: (id, name) => {},
    deleteName : (id) => {},
})

export default function useName(){
    return useContext(NameContext)
}

export const NameProvider = NameContext.Provider