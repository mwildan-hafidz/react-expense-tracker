import { useEffect, useMemo, useReducer } from "react";
import { v6 as getId } from "uuid";
import { AppContext } from "./AppContext.js";

export default function AppProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, startingData, init);

  const spent = useMemo(
    () => data.expenses.reduce((total, expense) => total + expense.cost, 0),
    [data.expenses]
  );

  const remaining = useMemo(
    () => data.budget - spent,
    [data.budget, spent]
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <AppContext.Provider value={{ ...data, dispatch, spent, remaining }}>
      {children}
    </AppContext.Provider>
  );
}

function reducer(data, action) {
  switch (action.type) {
    case "addexpense":
      return {
        ...data,
        expenses: [...data.expenses, {
          id: getId(),
          content: action.content,
          cost: action.cost,
          category: action.category.toLowerCase(),
        }],
      }

    case "updatebudget":
      return { ...data, budget: action.budget };

    case "deleteexpense":
      return {
        ...data,
        expenses: data.expenses.filter((expense) => expense.id !== action.id),
      }

    default: throw Error("Unknown action.type: " + action.type);
  }
}

const startingData = {
  budget: 500,
  expenses: [
    { id: getId(), content: "Shopping", cost: 40, category: "personal" },
    { id: getId(), content: "Groceries", cost: 120, category: "food" },
    { id: getId(), content: "Restaurant", cost: 75, category: "food" },
    { id: getId(), content: "Internet", cost: 50, category: "utilities" },
    { id: getId(), content: "Charity Donation", cost: 100, category: "" },
  ],
}

function init(initArg) {
  const data = localStorage.getItem("data");

  if (data) {
    return JSON.parse(data);
  }

  return initArg;
}