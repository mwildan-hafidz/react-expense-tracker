import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import ListItem from "./ListItem.jsx";

export default function List() {
  const { expenses } = useContext(AppContext);

  return expenses.length === 0 ? (
    <h1 className="p-3 border rounded border-neutral-300 text-center text-neutral-500">
      You don't have any expenses yet.
    </h1>
  ) : (
    <ul className="border rounded border-neutral-300 divide-neutral-300 divide-y *:p-3">
      {expenses.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  )
}
