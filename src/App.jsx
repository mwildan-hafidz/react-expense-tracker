import AppProvider from "./AppProvider.jsx";
import Navbar from "./Navbar.jsx";
import Statuses from "./Statuses.jsx";
import Expenses from "./Expenses.jsx";
import AddExpense from "./AddExpense.jsx";

export default function App() {
  return (
    <AppProvider>
      <Navbar />

      <div className="p-2 grid grid-rows-3 gap-2">
        <Statuses />
      </div>

      <div className="mt-5 p-2">
        <h1 className="text-xl font-semibold mb-2">Expenses</h1>
        <Expenses />
        <AddExpense />
      </div>
    </AppProvider>
  );
}