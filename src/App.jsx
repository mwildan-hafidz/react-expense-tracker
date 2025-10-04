import AppProvider from "./AppProvider.jsx";
import Navbar from "./Navbar.jsx";
import Chart from "./Chart.jsx";
import Statuses from "./Statuses.jsx";
import Expenses from "./Expenses.jsx";
import AddExpense from "./AddExpense.jsx";

export default function App() {
  return (
    <AppProvider>
      <Navbar />

      <div className="p-2">
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
          <div className="justify-center col-span-3 sm:col-span-1 sm:row-span-3 max-h-48 sm:max-h-full border border-neutral-300 rounded p-2">
            <Chart />
          </div>
          <Statuses />
        </div>
      </div>

      <div className="mt-3 p-2">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">Expenses</h1>
          <AddExpense />
        </div>
        <Expenses />
      </div>
    </AppProvider>
  );
}