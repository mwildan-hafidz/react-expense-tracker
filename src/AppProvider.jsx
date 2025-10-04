import { useMemo, useReducer } from "react";
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
  }, {
    budget: 5000,
    expenses: [
      { id: getId(), content: "Shopping", cost: 40, category: "personal" },
      { id: getId(), content: "Travel", cost: 300, category: "leisure" },
      { id: getId(), content: "Car service", cost: 60, category: "transport" },
      { id: getId(), content: "Groceries", cost: 120, category: "food" },
      { id: getId(), content: "Restaurant", cost: 75, category: "food" },
      { id: getId(), content: "Electricity Bill", cost: 90, category: "utilities" },
      { id: getId(), content: "Water Bill", cost: 25, category: "utilities" },
      { id: getId(), content: "Internet", cost: 50, category: "utilities" },
      { id: getId(), content: "Gas", cost: 45, category: "transport" },
      { id: getId(), content: "Phone Plan", cost: 30, category: "utilities" },
      { id: getId(), content: "Gym Membership", cost: 60, category: "health" },
      { id: getId(), content: "Streaming Service", cost: 15, category: "entertainment" },
      { id: getId(), content: "Books", cost: 40, category: "education" },
      { id: getId(), content: "Clothes", cost: 110, category: "personal" },
      { id: getId(), content: "Health Insurance", cost: 200, category: "health" },
      { id: getId(), content: "Home Supplies", cost: 35, category: "household" },
      { id: getId(), content: "Coffee", cost: 20, category: "food" },
      { id: getId(), content: "Taxi", cost: 25, category: "transport" },
      { id: getId(), content: "Concert Ticket", cost: 150, category: "entertainment" },
      { id: getId(), content: "Gift", cost: 80, category: "personal" },
      { id: getId(), content: "Laptop Repair", cost: 250, category: "" },
      { id: getId(), content: "Furniture", cost: 400, category: "" },
      { id: getId(), content: "Vacation Package", cost: 1200, category: "" },
      { id: getId(), content: "Pet Supplies", cost: 60, category: "" },
      { id: getId(), content: "Charity Donation", cost: 100, category: "" },
    ],
  });

  const spent = useMemo(
    () => data.expenses.reduce((total, expense) => total + expense.cost, 0),
    [data.expenses]
  );

  const remaining = useMemo(
    () => data.budget - spent,
    [data.budget, spent]
  );

  return (
    <AppContext.Provider value={{ ...data, dispatch, spent, remaining }}>
      {children}
    </AppContext.Provider>
  );
}