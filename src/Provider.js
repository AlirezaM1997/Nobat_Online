import React, { useState } from "react";

const Context = React.createContext()

export default function Provider({children}) {
    const [flag , setFlag]=useState(false)
     return (
        <Context.Provider value={{setFlag , flag}}>
            {children}
        </Context.Provider>
     )
 }

 export function useFlagState() {
     return React.useContext(Context)
 }

