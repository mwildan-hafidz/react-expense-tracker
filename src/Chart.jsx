import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { capitalize } from "./utils.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ expenses, remaining }) {
  const sortedExpenses = expenses.toSorted((first, next) => first.category.localeCompare(next.category));
  const categories = [...new Set(sortedExpenses.map((exp) => exp.category))];

  const totals = categories.map(
    (ctg) => sortedExpenses.reduce(
      (sum, exp) => exp.category === ctg ? sum + exp.cost : sum, 0
    )
  );

  const data = {
    labels: ["Remaining", ...categories.map((ctg) => capitalize(ctg))],
    datasets: [
      {
        label: "Total",
        data: [remaining, ...totals],
        backgroundColor: "#4dc9f6",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: $${item.formattedValue}`,
        }
      }
    },
  };


  return <Doughnut data={data} options={options} />;
}