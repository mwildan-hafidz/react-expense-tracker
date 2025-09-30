import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import ListItem from "./ListItem.jsx";

export default function List() {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="border rounded border-neutral-300 divide-neutral-300 divide-y *:p-3">
      {expenses.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  )
}
