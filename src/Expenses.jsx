import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext.js";
import List from "./List.jsx";

export default function Expenses() {
  const { expenses } = useContext(AppContext);

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
    </>
  )
}
