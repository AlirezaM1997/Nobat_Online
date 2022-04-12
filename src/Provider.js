import React, { useState } from "react";
import doctors from "./All-Data/doctors";
import users from "./All-Data/users";

const Context = React.createContext();

export default function Provider({ children }) {
  const [flag, setFlag] = useState(1);
  const [searchDoc, setSearchDoc] = useState("");
  const [searchExp, setSearchExp] = useState("");

  const [allDoctors, setAllDoctors] = useState(doctors);
  const [allUsers, setAllUsers] = useState(users);

  const [currentAppoin, setCurrentAppoin] = useState();
  const [noResult, setNoResult] = useState(false);
  const [adSearchName, setAdSearchName] = useState("");
  const [adSearchExp, setAdSearchExp] = useState("");
  const [workingDay, setWorkingDay] = useState("");
  const [auth, setAuth] = useState(false);
  const [docAuth, setDocAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userNameOfUser: "",
    passwordOfUser: "",
  });
  const [currentDoctor, setCurrentDoctor] = useState({
    userNameOfDoctor: "",
    passwordOfDoctor: "",
  });
  const [selectedTime, setSelectedTime] = useState("");


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
        selectedTime,
        setSelectedTime,
        allUsers,
        setAllUsers,
        currentDoctor,
        setCurrentDoctor,
        docAuth,
        setDocAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAllState() {
  return React.useContext(Context);
}
