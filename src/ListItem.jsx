import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import { TiDelete } from "react-icons/ti";
import { capitalize } from "./utils.js";

export default function ListItem({ item }) {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: "deleteexpense",
      id: item.id,
    })
  }

  return (
    <li className="grid grid-cols-4 items-center">
      <span className="col-span-2">{item.content}</span>
      <span className="text-sm text-neutral-400 overflow-ellipsis overflow-hidden">{capitalize(item.category)}</span>
      <div className="flex items-center gap-1 justify-self-end">
        <span
          className="bg-sky-500 text-white px-2 py-0.5 rounded-full text-xs font-bold"
        >
          ${item.cost}
        </span>
        <TiDelete
          size={"1.5rem"}
          className="cursor-pointer hover:opacity-70"
          onClick={handleClick}
        />
      </div>
    </li>
  );
}
