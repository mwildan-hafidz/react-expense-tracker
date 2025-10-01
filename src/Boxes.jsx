import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import Box from "./Box.jsx";

export default function Boxes() {
  const { budget, expenses, dispatch } = useContext(AppContext);

  const spent = expenses.reduce((total, expense) => total + expense.cost, 0);

  const handleClick = () => {
    dispatch({ type: "updatebudget", budget: 800 });
  }

  return (
    <>
      <div className="relative">
        <Box text={"Budget"} value={budget} variant={"gray"} />
        <div className="absolute right-2.5 inset-y-0 flex items-center">
          <button
            className="bg-neutral-400 px-2 py-1 rounded font-semibold text-neutral-100"
            onClick={handleClick}
          >
            Edit
          </button>
        </div>
      </div>
      <Box text={"Remaining"} value={budget - spent} variant={"green"} />
      <Box text={"Spent"} value={spent} variant={"blue"} />
    </>
  )
}