import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./AppContext.js";
import { GrFormClose } from "react-icons/gr";
import List from "./List.jsx";

export default function Expenses() {
  const { expenses, dispatch } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [visibleExpenses, setVisibleExpenses] = useState(expenses);

  // Update visible expenses.
  useEffect(() => {
    setVisibleExpenses(expenses);

    if (expenses.length === 0) setSearch("");
  }, [expenses]);

  // Handle search operation.
  useEffect(() => {
    const s = search.trim().toLowerCase();
    if (s) {
      setVisibleExpenses(expenses.filter((exp) => exp.content.toLowerCase().includes(s)));
    }
    else {
      setVisibleExpenses(expenses);
    }
  }, [search, expenses]);

  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const inputRef = useRef(null)

  useEffect(() => {
    if (isAdding) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) return;

    dispatch({
      type: "addexpense",
      content: name.trim(),
      cost: parseFloat(cost),
    });

    setName("");
    setCost("");
    setIsAdding(false);
  }

  return (
    <>
      <input
        type="text"
        id="search"
        autoComplete="off"
        className="block w-full p-2 outline-1 -outline-offset-1 rounded outline-neutral-300 mb-2 focus:outline-2 focus:outline-sky-500 disabled:bg-neutral-200"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        disabled={expenses.length === 0}
      />

      <List expenses={visibleExpenses} />

      <button
        className="bg-sky-500 px-2 py-1 rounded text-white font-semibold block mt-2 ml-auto"
        onClick={() => setIsAdding(true)}
      >
        Add Expense
      </button>
      {isAdding ? <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
        <div className="bg-white rounded p-5 shadow/25 w-2xs relative">
          <form
            onSubmit={handleSubmit}
          >
            <h1 htmlFor="cost-edit" className="font-semibold block mb-2">Add Expense</h1>
            <div className="grid grid-cols-5 mb-2 rounded *:p-2 outline outline-neutral-300 -outline-offset-1 divide-x divide-neutral-300 focus-within:outline-2 focus-within:outline-sky-500">
              <input
                required
                type="text"
                className="block w-full outline-0 col-span-3"
                placeholder="Name"
                name="name"
                autoComplete="off"
                value={name}
                onChange={(event) => setName(event.target.value)}
                ref={inputRef}
              />
              <input
                required
                type="number"
                className="block w-full outline-0"
                placeholder="Cost"
                name="cost"
                autoComplete="off"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="block bg-sky-500 font-semibold text-white rounded px-2 py-1 ml-auto"
            >
              Add
            </button>
          </form>
          <button
            className="absolute top-5 right-5 cursor-pointer hover:*:opacity-50"
            onClick={() => setIsAdding(false)}
          >
            <GrFormClose />
          </button>
        </div>
      </div> : null}
    </>
  )
}
