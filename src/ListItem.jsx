import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import { TiDelete } from "react-icons/ti";

export default function ListItem({ item }) {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: "deleteexpense",
      id: item.id,
    })
  }

  return (
    <li className="flex justify-between items-center">
      <span>{item.content}</span>
      <div className="flex items-center gap-1">
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