import React, { useState } from "react";
import data from "./data";
const Context = React.createContext();

export default function Provider({ children }) {
  const [flag, setFlag] = useState(false);
  const [searchDoc, setSearchDoc] = useState("");
  const [searchExp, setSearchExp] = useState("");
  const [allDoctors, setAllDoctors] = useState(data);
  let [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  // if (!flag) {
  //   isAdvancedSearch = '44'
  // }
// console.log(isAdvancedSearch);
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
        isAdvancedSearch,
        setIsAdvancedSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAllState() {
  return React.useContext(Context);
}
