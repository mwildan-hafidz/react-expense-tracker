import { TiDelete } from "react-icons/ti";

export default function List({ items }) {
  return (
    <ul className="border rounded border-neutral-300 divide-neutral-300 divide-y *:p-3">
      {items.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  )
}

function ListItem({ item }) {
  return (
    <li className="flex justify-between items-center">
      <span>{item.content}</span>
      <div className="flex items-center gap-1">
        <span
          className="bg-sky-500 text-white px-2 py-0.5 rounded-full text-xs font-bold"
        >
          ${item.cost}
        </span>
        <TiDelete size={"1.5rem"} />
      </div>
    </li>
  );
}