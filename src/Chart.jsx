import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { capitalize, stringToHSL } from "./utils.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ expenses, remaining }) {
  const { categorized, uncategorized } = expenses.reduce(
    (acc, exp) => {
      if (exp.category === "") acc.uncategorized.push(exp);
      else acc.categorized.push(exp);
      return acc;
    },
    { categorized: [], uncategorized: [] }
  );

  const categorizedExpenses = categorized;
  const otherExpenses = uncategorized;

  const categories = [...new Set(categorizedExpenses.map((exp) => exp.category))];

  const colors = categories.map(
    (ctg) => {
      const { hue, saturation, lightness } = stringToHSL(ctg);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
  );

  const totals = categories.map(
    (ctg) => categorizedExpenses.reduce(
      (sum, exp) => exp.category === ctg ? sum + exp.cost : sum, 0
    )
  );
  const otherTotals = otherExpenses.reduce((sum, exp) => sum + exp.cost, 0);

  const data = {
    labels: ["Remaining", ...categories.map((ctg) => capitalize(ctg)), "Other"],
    datasets: [
      {
        label: "Total",
        backgroundColor: ["hsl(0, 0%, 15%)", ...colors, "hsl(0, 0%, 60%)"],
        data: [remaining, ...totals, otherTotals],
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