import AppProvider from "./AppProvider.jsx";
import Chart from "./Chart.jsx";
import Statuses from "./Statuses.jsx";
import Expenses from "./Expenses.jsx";
import AddExpense from "./AddExpense.jsx";

export default function App() {
  return (
    <AppProvider>
      <div className="bg-neutral-800 p-3 sm:px-5 lg:px-10 text-white shadow/25 sticky top-0 inset-x-0 z-50">
        <h1 className="font-bold text-lg">EXPENSE TRACKER</h1>
      </div>

      <div className="p-2 sm:p-5 lg:px-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
          <div className="justify-center col-span-3 sm:col-span-1 sm:row-span-3 max-h-48 sm:max-h-full border border-neutral-300 rounded p-2">
            <Chart />
          </div>
          <Statuses />
        </div>
      </div>

      <div className="mt-3 p-2 sm:p-5 lg:px-10">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">Expenses</h1>
          <AddExpense />
        </div>
        <Expenses />
      </div>
    </AppProvider>
  );
}