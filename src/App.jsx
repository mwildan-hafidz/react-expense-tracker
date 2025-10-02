import AppProvider from "./AppProvider.jsx";
import Navbar from "./Navbar.jsx";
import Boxes from "./Boxes.jsx";
import Expenses from "./Expenses.jsx";

export default function App() {
  return (
    <AppProvider>
      <Navbar />

      <div className="p-2 grid grid-rows-3 gap-2">
        <Boxes />
      </div>

      <div className="mt-5 p-2">
        <h1 className="text-xl font-semibold mb-2">Expenses</h1>
        <Expenses />
      </div>
    </AppProvider>
  );
}