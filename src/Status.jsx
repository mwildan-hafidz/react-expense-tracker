import { TiEdit } from "react-icons/ti"

export default function Status({ text, value, variant, editable, onEditClick }) {
  let bg, color;

  switch (variant) {
    case "gray":
      [bg, color] = ["bg-neutral-200", "text-neutral-700"];
      break;

    case "green":
      [bg, color] = ["bg-green-100", "text-green-700"];
      break;

    case "blue":
      [bg, color] = ["bg-sky-200", "text-sky-700"];
      break;

    default: throw new Error("Unknown variant: " + variant);

  }

  return (
    <div className={`${bg} ${color} px-2 py-4 sm:px-4 rounded font-semibold grid grid-cols-1 sm:grid-cols-2`}>
      <span>{text}</span>
      <div className="flex gap-2 justify-start sm:justify-between items-center">
        <span>${value}</span>
        {editable ? <button className="shrink-0 rounded" onClick={onEditClick}><TiEdit size={"1.5rem"} /></button> : null}
      </div>
    </div>
  )
}