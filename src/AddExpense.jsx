import { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "./AppContext.js";
import Modal from "./Modal.jsx";

export default function AddExpense() {
  const { dispatch } = useContext(AppContext);
  const [isModalActive, setIsModalActive] = useState(false);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (isModalActive) {
      inputRef.current.focus();
    }
  }, [isModalActive]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const safeName = name.trim();
    const safeCost = parseFloat(cost);
    const safeCategory = category.toLowerCase();

    if (!safeName || !safeCost) return;

    dispatch({
      type: "addexpense",
      content: safeName,
      cost: safeCost,
      category: safeCategory,
    });

    setName("");
    setCost("");
    setCategory("");

    setIsModalActive(false);
  }

  return (
    <>
      <button
        className="bg-sky-500 px-2 py-1 rounded text-white font-semibold block hover:bg-sky-600"
        onClick={() => setIsModalActive(true)}
      >
        Add
      </button>

      <Modal active={isModalActive} onClose={() => setIsModalActive(false)}>
        <form
          onSubmit={handleSubmit}
        >
          <h1 htmlFor="cost-edit" className="font-semibold block mb-2">Add Expense</h1>
          <div className="grid grid-cols-5 mb-1 rounded *:p-2 outline outline-neutral-300 -outline-offset-1 divide-x divide-neutral-300 focus-within:outline-2 focus-within:outline-sky-500">
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
              className="block w-full outline-0 col-span-2"
              placeholder="Cost"
              name="cost"
              autoComplete="off"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
          <input
            type="text"
            className="mb-2 block w-full outline -outline-offset-1 outline-neutral-300 p-2 rounded focus:outline-2 focus:outline-sky-500"
            placeholder="Category (optional)"
            name="category"
            autoComplete="off"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button
            type="submit"
            className="block bg-sky-500 font-semibold text-white rounded px-2 py-1 ml-auto hover:bg-sky-600"
          >
            Add
          </button>
        </form>
      </Modal>
    </>
  );
}