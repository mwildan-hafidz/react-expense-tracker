import { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "./AppContext.js";
import Modal from "./Modal.jsx";

export default function AddExpense() {
  const { dispatch } = useContext(AppContext);
  const [isModalActive, setIsModalActive] = useState(false);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (isModalActive) {
      inputRef.current.focus();
    }
  }, [isModalActive]);

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
    setIsModalActive(false);
  }

  return (
    <>
      <button
        className="bg-sky-500 px-2 py-1 rounded text-white font-semibold block mt-2 ml-auto"
        onClick={() => setIsModalActive(true)}
      >
        Add Expense
      </button>

      <Modal active={isModalActive} onClose={() => setIsModalActive(false)}>
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
      </Modal>
    </>
  );
}