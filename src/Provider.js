import React, { useState } from "react";
import data from "./data";
const Context = React.createContext();

export default function Provider({ children }) {
  const [flag, setFlag] = useState(1);
  const [searchDoc, setSearchDoc] = useState("");
  const [searchExp, setSearchExp] = useState("");
  const [allDoctors, setAllDoctors] = useState(data);

  return (
    <Context.Provider
      value={{
        flag,
        setFlag,
        searchDoc,
        setSearchDoc,
        searchExp,
        setSearchExp,
        allDoctors,
        setAllDoctors,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAllState() {
  return React.useContext(Context);
}
