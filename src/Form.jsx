import { useState, useContext } from "react";
import { AppContext } from "./AppContext.js";

export default function Form() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const { dispatch } = useContext(AppContext);

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
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 mb-2 rounded *:p-2 outline outline-neutral-300 -outline-offset-1 divide-x divide-neutral-300 focus-within:outline-2 focus-within:outline-sky-500">
        <input
          required
          type="text"
          className="block w-full outline-0"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="block px-3 py-1 bg-sky-500 text-white font-semibold rounded cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
}