import { v6 as getId } from "uuid";
import Navbar from "./Navbar.jsx";
import Box from "./Box.jsx";
import List from "./List.jsx";
import Form from "./Form.jsx";

export default function App() {
  const items = [
    { id: getId(), content: "Shopping", cost: 40 },
    { id: getId(), content: "Travel", cost: 300 },
    { id: getId(), content: "Car service", cost: 60 },
  ];

  return (
    <>
      <Navbar />

      <div className="p-2 grid grid-rows-3 gap-2">
        <Box text={"Budget"} value={500} variant={"gray"} />
        <Box text={"Remaining"} value={300} variant={"green"} />
        <Box text={"Spent"} value={200} variant={"blue"} />
      </div>

      <div className="mt-5 p-2">
        <h1 className="text-xl font-semibold mb-2">Expenses</h1>
        <List items={items} />
      </div>

      <div className="mt-5 p-2">
        <h1 className="text-xl font-semibold mb-2">Add Expense</h1>
        <Form />
      </div>
    </>
  );
}