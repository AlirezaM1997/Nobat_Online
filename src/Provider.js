import React, { useState } from "react";
import data from "./All-Data/data";
const Context = React.createContext();

export default function Provider({ children }) {
  const [flag, setFlag] = useState(1);
  const [searchDoc, setSearchDoc] = useState("");
  const [searchExp, setSearchExp] = useState("");
  const [allDoctors, setAllDoctors] = useState(data);
  const [currentAppoin, setCurrentAppoin] = useState();
  const [noResult, setNoResult] = useState(false);
  const [adSearchName, setAdSearchName] = useState("");
  const [adSearchExp, setAdSearchExp] = useState("");
  const [workingDay, setWorkingDay] = useState("");
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userNameOfUser: "",
    passwordOfUser: "",
  });

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
        currentAppoin,
        setCurrentAppoin,
        noResult,
        setNoResult,
        adSearchName,
        setAdSearchName,
        adSearchExp,
        setAdSearchExp,
        workingDay,
        setWorkingDay,
        auth,
        setAuth,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAllState() {
  return React.useContext(Context);
}
{/* <Context.Provider value={flag}>
<Context.Provider value={setFlag}>
  <Context.Provider value={searchDoc}>
    <Context.Provider value={setSearchDoc}>
      <Context.Provider value={searchExp}>
        <Context.Provider value={setSearchExp}>
          <Context.Provider value={allDoctors}>
            <Context.Provider value={setAllDoctors}>
              <Context.Provider value={currentAppoin}>
                <Context.Provider value={setCurrentAppoin}>
                  <Context.Provider value={noResult}>
                    <Context.Provider value={setNoResult}>
                      <Context.Provider value={adSearchName}>
                        <Context.Provider value={setAdSearchName}>
                          <Context.Provider value={adSearchExp}>
                            <Context.Provider value={setAdSearchExp}>
                              <Context.Provider value={workingDay}>
                                <Context.Provider value={setWorkingDay}>
                                  <Context.Provider value={auth}>
                                    <Context.Provider value={setAuth}>
                                      <Context.Provider
                                        value={currentUser}
                                      >
                                        <Context.Provider
                                          value={setCurrentUser}
                                        >
                                          {children}
                                        </Context.Provider>
                                      </Context.Provider>
                                    </Context.Provider>
                                  </Context.Provider>
                                </Context.Provider>
                              </Context.Provider>
                            </Context.Provider>
                          </Context.Provider>
                        </Context.Provider>
                      </Context.Provider>
                    </Context.Provider>
                  </Context.Provider>
                </Context.Provider>
              </Context.Provider>
            </Context.Provider>
          </Context.Provider>
        </Context.Provider>
      </Context.Provider>
    </Context.Provider>
  </Context.Provider>
</Context.Provider>
</Context.Provider> */}