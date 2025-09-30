import Navbar from "./Navbar.jsx";
import Box from "./Box.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="p-2 grid grid-rows-3 gap-2">
        <Box text={"Budget"} value={500} variant={"gray"} />
        <Box text={"Remaining"} value={300} variant={"green"} />
        <Box text={"Spent"} value={200} variant={"blue"} />
      </div>
    </>
  );
}