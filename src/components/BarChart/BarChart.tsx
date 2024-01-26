import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const x = [
  6000, 21000, 2700, 2800, 9000, 45000, 9000, 23000, 32000, 3000, 30000, 21000,
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "",
    },
    tooltip: {
      displayColors: false,
      cornerRadius: 8,
      padding: {
        top: 7,
        bottom: 7,
        left: 15,
        right: 15,
      },
      callbacks: {
        title: () => {
          return "";
        },

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (tooltipItems: any) => {
          return "$" + parseInt(tooltipItems.formattedValue) + ".000";
        },
      },
    },
  },
  scales: {
    y: {
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: "#EAEAEA", // for the grid lines
        tickColor: "#fff", // for the tick mark
        tickBorderDash: [2, 3], // also for the tick, if long enough
        tickLength: 10, // just to see the dotted line
        tickWidth: 2,
        offset: true,
        drawTicks: true, // true is default
        drawOnChartArea: true, // true is default
      },

      beginAtZero: true,
    },
    x: {
      display: true,
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        drawTicks: false, // true is default
        drawOnChartArea: false, // true is default
      },

      beginAtZero: true,
    },
  },
};

const BarChart = () => {
  const data = {
    labels,
    datasets: [
      {
        borderRadius: 50,

        data: x.map((data) => data),

        backgroundColor: "rgba(52, 202, 165, 0.10)",
        hoverBackgroundColor: "#34CAA5",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default BarChart;
