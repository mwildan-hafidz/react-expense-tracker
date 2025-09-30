import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import Box from "./Box.jsx";

export default function Boxes() {
  const { budget } = useContext(AppContext);

  return (
    <>
      <Box text={"Budget"} value={budget} variant={"gray"} />
      <Box text={"Remaining"} value={300} variant={"green"} />
      <Box text={"Spent"} value={200} variant={"blue"} />
    </>
  )
}