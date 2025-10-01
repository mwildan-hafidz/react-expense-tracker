import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./AppContext.js";
import Box from "./Box.jsx";

export default function Boxes() {
  const { budget, expenses, dispatch } = useContext(AppContext);

  const spent = expenses.reduce((total, expense) => total + expense.cost, 0);

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(budget);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.select();
    }
  }, [isEditing])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editValue) {
      dispatch({ type: "updatebudget", budget: parseFloat(editValue) });
      setIsEditing(false);
    }
  }

  return (
    <>
      <div className="relative">
        <Box text={"Budget"} value={budget} variant={"gray"} />
        <div className="absolute right-2.5 inset-y-0 flex items-center">
          <button
            className="bg-neutral-400 px-2 py-1 rounded font-semibold text-neutral-100"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      </div>

      <Box text={"Remaining"} value={budget - spent} variant={"green"} />
      <Box text={"Spent"} value={spent} variant={"blue"} />

      {isEditing ? <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
        <div className="bg-white rounded p-5 shadow/25 w-3xs">
          <form onSubmit={handleSubmit}>
            <label htmlFor="cost-edit" className="font-semibold">Edit budget</label>
            <input
              type="number"
              id="cost-edit"
              className="block w-full outline-0 min-w-0 border rounded border-neutral-300 px-2 py-1 my-2"
              value={editValue}
              onChange={(event) => setEditValue(event.target.value)}
              ref={inputRef}
              autoComplete="off"
            />
            <button
              type="submit"
              className="block bg-sky-500 font-semibold text-white rounded px-2 py-1 ml-auto"
            >
              Save
            </button>
          </form>
        </div>
      </div> : null}
    </>
  )
}