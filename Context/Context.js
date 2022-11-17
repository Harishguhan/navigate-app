import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  names: [],
  addname: (name) => {},
});

function ContextProvider({ children }) {

  const [name, setName] = useState([]);

  const addname = (newname) => {
    const newName = [...name,newname];
    setName(newName);
    
  };

  return (
    <Context.Provider value={{ name: name, addname: addname}}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
