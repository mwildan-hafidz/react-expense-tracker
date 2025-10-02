import { useReducer } from "react";
import { v6 as getId } from "uuid";
import { AppContext } from "./AppContext.js";

export default function AppProvider({ children }) {
  const [data, dispatch] = useReducer((data, action) => {
    switch (action.type) {
      case "addexpense":
        return {
          ...data,
          expenses: [...data.expenses, {
            id: getId(),
            content: action.content,
            cost: action.cost,
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
  }, {
    budget: 2000,
    expenses: [
      { id: getId(), content: "Shopping", cost: 40 },
      { id: getId(), content: "Travel", cost: 300 },
      { id: getId(), content: "Car service", cost: 60 },
      { id: getId(), content: "Groceries", cost: 120 },
      { id: getId(), content: "Restaurant", cost: 75 },
      { id: getId(), content: "Electricity Bill", cost: 90 },
      { id: getId(), content: "Water Bill", cost: 25 },
      { id: getId(), content: "Internet", cost: 50 },
      { id: getId(), content: "Gas", cost: 45 },
      { id: getId(), content: "Phone Plan", cost: 30 },
      { id: getId(), content: "Gym Membership", cost: 60 },
      { id: getId(), content: "Streaming Service", cost: 15 },
      { id: getId(), content: "Books", cost: 40 },
      { id: getId(), content: "Clothes", cost: 110 },
      { id: getId(), content: "Health Insurance", cost: 200 },
      { id: getId(), content: "Home Supplies", cost: 35 },
      { id: getId(), content: "Coffee", cost: 20 },
      { id: getId(), content: "Taxi", cost: 25 },
      { id: getId(), content: "Concert Ticket", cost: 150 },
      { id: getId(), content: "Gift", cost: 80 },

    ],
  });

  return (
    <AppContext.Provider value={{ ...data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}