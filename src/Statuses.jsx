import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./AppContext.js";
import Status from "./Status.jsx";
import Modal from "./Modal.jsx";

export default function Statuses() {
  const { budget, dispatch, spent, remaining } = useContext(AppContext);

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

  return (
    <>
      <Status
        text={"Budget"}
        value={budget}
        variant={"gray"}
        editable={true}
        onEditClick={() => setIsModalActive(true)}
      />
      <Status text={"Remaining"} value={remaining} variant={"green"} />
      <Status text={"Spent"} value={spent} variant={"blue"} />

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