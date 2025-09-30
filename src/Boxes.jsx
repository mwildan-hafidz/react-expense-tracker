import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import Box from "./Box.jsx";

export default function Boxes() {
  const { budget, expenses } = useContext(AppContext);

  const spent = expenses.reduce((total, expense) => total + expense.cost, 0);

  return (
    <>
      <Box text={"Budget"} value={budget} variant={"gray"} />
      <Box text={"Remaining"} value={budget - spent} variant={"green"} />
      <Box text={"Spent"} value={spent} variant={"blue"} />
    </>
  )
}