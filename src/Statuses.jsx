import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./AppContext.js";
import Status from "./Status.jsx";
import Modal from "./Modal.jsx";
import Chart from "./Chart.jsx";

export default function Statuses() {
  const { budget, expenses, dispatch } = useContext(AppContext);

  const [isModalActive, setIsModalActive] = useState(false);
  const [editValue, setEditValue] = useState(budget);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isModalActive) {
      inputRef.current.value = budget;
      inputRef.current.select();
    }
  }, [isModalActive, budget])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editValue.trim()) {
      dispatch({ type: "updatebudget", budget: parseFloat(editValue) });
      setIsModalActive(false);
    }
  }

  const spent = expenses.reduce((total, expense) => total + expense.cost, 0);
  const remaining = budget - spent;

  return (
    <>
      <div className="grid grid-rows-3 sm:grid-cols-2 gap-2">
        <div className="hidden sm:block justify-center row-span-3 border border-neutral-300 rounded p-2">
          <Chart expenses={expenses} remaining={remaining} />
        </div>
        <div className="relative">
          <Status text={"Budget"} value={budget} variant={"gray"} />
          <div className="absolute right-2.5 inset-y-0 flex items-center">
            <button
              className="px-2 py-1 border-2 border-neutral-400 rounded font-semibold text-neutral-500"
              onClick={() => setIsModalActive(true)}
            >
              Edit
            </button>
          </div>
        </div>
        <Status text={"Remaining"} value={remaining} variant={"green"} />
        <Status text={"Spent"} value={spent} variant={"blue"} />
      </div>

      <Modal active={isModalActive} onClose={() => setIsModalActive(false)}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cost-edit" className="font-semibold">Edit budget</label>
          <input
            type="number"
            id="cost-edit"
            className="block w-full outline-0 min-w-0 border rounded border-neutral-300 px-2 py-1 my-2"
            placeholder="Budget"
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
      </Modal>
    </>
  )
}