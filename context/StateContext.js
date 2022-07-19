import { createContext, useState } from "react";

export const StateContext = createContext();

function StateContextProvider(props) {
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: "" });
  return (
    <StateContext.Provider value={{ selectedTask, selectedTask }}>
      {props.children}
    </StateContext.Provider>
  );
}
