import { useReducer } from "react";
import { v6 as getId } from "uuid";
import { AppContext } from "./AppContext.js";

export default function AppProvider({ children }) {
  const [data, dispatch] = useReducer((data, action) => {
    switch (action.type) {
      case "addexpense":
        return {
          ...data, expenses: [...data.expenses, {
            id: getId(),
            content: action.content,
            cost: action.cost,
          }]
        }

      default:
        break;
    }
  }, {
    budget: 500,
    expenses: [
      { id: getId(), content: "Shopping", cost: 40 },
      { id: getId(), content: "Travel", cost: 300 },
      { id: getId(), content: "Car service", cost: 60 },
    ],
  });

  return (
    <AppContext.Provider value={{ ...data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}