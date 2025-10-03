export default function Status({ text, value, variant }) {
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
    <div className={`${bg} ${color} p-4 rounded font-semibold grid grid-cols-6`}>
      <span className="col-span-3">{text}</span>
      <span className="col-span-2">${value}</span>
    </div>
  )
}