import { createContext , useContext } from "react";

export const todoContext = createContext ( 
    {
        todos: [
            {
                id:1  ,
                todo: work ,
                complete : false
            }
        ]
    }
)