import { useState } from "react";
import { v6 as getId } from "uuid";
import { AppContext } from "./AppContext.js";

export default function AppProvider({ children }) {
  const [data, setData] = useState({
    budget: 500,
    expenses: [
      { id: getId(), content: "Shopping", cost: 40 },
      { id: getId(), content: "Travel", cost: 300 },
      { id: getId(), content: "Car service", cost: 60 },
    ],
  });

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}