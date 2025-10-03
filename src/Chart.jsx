import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { capitalize } from "./utils.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ expenses, remaining }) {
  const sortedExpenses = expenses.toSorted((first, next) => first.category.localeCompare(next.category));

  const categories = [...new Set(sortedExpenses.map((exp) => exp.category))];
  const totals = categories.map((ctg) => {
    let totalCost = 0;
    sortedExpenses.map((exp) => {
      if (exp.category === ctg) {
        totalCost += exp.cost;
      }
    });
    return totalCost;
  });

  const data = {
    labels: ["Remaining", ...categories.map((ctg) => capitalize(ctg))],
    datasets: [
      {
        label: "Total",
        data: [remaining, ...totals],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
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
        onClick: () => { },
      },
      tooltip: {
        callbacks: {
          label: (item) => `Total: $${item.formattedValue}`,
        }
      }
    },
  };


  return <Doughnut data={data} options={options} />;
}